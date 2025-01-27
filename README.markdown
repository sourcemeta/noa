Noa
===

A set of re-usable and opinionated utilities for
[Sourcemeta](https://www.sourcemeta.com) projects.

Installation
------------

We recommend using [`vendorpull`](https://github.com/sourcemeta/vendorpull) to
include Noa in your `vendor` directory.

### Live at head

Like projects such as [`GoogleTest`](https://github.com/google/googletest), Noa
follows the [Abseil Live at
Head](https://abseil.io/about/philosophy#upgrade-support) philosophy. We
recommend always following the latest commit in the `main` branch.

CMake
-----

To load the CMake utilities, include `cmake/noa.cmake` as part of your project.

### Defaults

Noa will automatically set sane defaults for your project. You can check the
list of applied defaults
[here](https://github.com/sourcemeta/noa/blob/main/cmake/noa/defaults.cmake).
**Note that these are only defaults. You can always override them after
including Noa.**

### Functions

#### `noa_executable`

Instantiate a C++ executable with an opinionated target name and default options.

```cmake
noa_library(
  [NAMESPACE [namespace]]
  PROJECT [project]
  NAME [name]
  VARIANT [variant]
  FOLDER [folder]
  SOURCES [globs...]
  [OUTPUT [output-variable]])
```

Calling this function will result in the following:

- A target called `[<namespace>_]<project>_<name>`

If `OUTPUT` is declared, such variable will contain the target name created by
this function.

#### `noa_library`

Instantiate a C++ library with an opinionated structure and configuration.

```cmake
noa_library(
  [NAMESPACE [namespace]]
  PROJECT [project]
  NAME [name]
  VARIANT [variant]
  FOLDER [folder]
  [PRIVATE_HEADERS [headers...]]
  [SOURCES [globs...]])
```

If `NAMESPACE` is declared, the files in `PRIVATE_HEADERS` are resolved
relatively to `include/<namespace>/<name>/<name>_`. Otherwise, they are
resolved relatively to `include/<name>/<name>_`.

If `NAMESPACE` is declared, the expected structure is as follows:

```
include/
  <namespace>/
    <project>/
      <name>.h
      <name>_<private_header>.h
<sources...>.cc
<sources...>.h
```

If `NAMESPACE` is not declared, the expected structure is as follows:

```
include/
  <project>/
    <name>.h
    <name>_<private_header>.h
<sources...>.cc
<sources...>.h
```

If `VARIANT` is declared, it allows for creating sub-libraries or variants
of a main library. The expected structure changes as follows:

```
<name>/
  include/
    <namespace>/
      <project>/
        <name>.h
        <name>_<private_header>.h
  <variant>/
    <sources...>.cc
    <sources...>.h
```

If `NAMESPACE` is declared, calling this function will result in the following:

- A target called `<namespace>_<project>_<name>`
- An alias target called `<namespace>::<project>::<name>`

If `NAMESPACE` is not declared, calling this function will result in the
following:

- A target called `<project>_<name>`
- An alias target called `<project>::<name>`

In all cases:

- An export file on the library include path called `<name>_export.h`, if the
  library is not header-only
- The version of the library corresponds to the project version, if the library
  is not header-only

#### `noa_library_install`

Declare installation of opinionated Noa libraries created with `noa_library`.

```cmake
noa_library_install([NAMESPACE [namespace]] PROJECT [project] NAME [name])
```

If `NAMESPACE` is declared, calling this function will result in the following:

- A `<namespace>_<project>_<name>` installation component
- A `<namespace>_<project>_<name>_dev` installation component

If `NAMESPACE` is not declared, calling this function will result in the
following:

- A `<project>_<name>` installation component
- A `<project>_<name>_dev` installation component

In both cases:

- An export file at `LIBDIR/cmake/<project>`

#### `noa_target_clang_format`

Setup [ClangFormat](https://clang.llvm.org/docs/ClangFormat.html) using an
opinionated configuration file based on the [LLVM coding
standards](https://llvm.org/docs/CodingStandards.html).

```cmake
noa_target_clang_format(SOURCES [globs...] [REQUIRED])
```

If the `REQUIRED` option is set and ClangFormat is not found, configuration
will abort.

After running this function, you will have two targets at your disposal:

- `clang_format`: Run the formatter on the files declared in the `SOURCES`
  option and modify them in place
- `clang_format_test`: Run the formatter on the files declared in the `SOURCES`
  option in dry-mode, reporting if there is any deviation. This option is meant
  to be used in a continuous-integration environment

For example:

```cmake
noa_target_clang_format(SOURCES src/*.h src/*.cc REQUIRED)
```

To run the targets:

```sh
cmake --build <dir> [<options>] --target clang_format
cmake --build <dir> [<options>] --target clang_format_test
```

#### `noa_target_clang_tidy`

Setup [ClangTidy](https://clang.llvm.org/extra/clang-tidy/index.html) using an
opinionated built-in [configuration
file](https://github.com/sourcemeta/noa/blob/main/cmake/noa/targets/clang-tidy.config).

```cmake
noa_target_clang_tidy(SOURCES [globs...] [REQUIRED])
```

If the `REQUIRED` option is set and ClangTidy is not found, configuration will
abort.

After running this function, you will have a new targets at your disposal:

- `clang_tidy`: Run the analyzer on the files declared in the `SOURCES` option

For example:

```cmake
noa_target_clang_tidy(SOURCES src/*.h src/*.cc REQUIRED)
```

To run the targets:

```sh
cmake --build <dir> [<options>] --target clang_tidy
```

#### `noa_target_shellcheck`

Setup [ShellCheck](https://www.shellcheck.net).

```cmake
noa_target_shellcheck(SOURCES [globs...] [REQUIRED])
```

If the `REQUIRED` option is set and ShellCheck is not found, configuration will
abort.

After running this function, you will have a new targets at your disposal:

- `shellcheck`: Run the linter on the files declared in the `SOURCES` option

For example:

```cmake
noa_target_shellcheck(SOURCES scripts/*.sh REQUIRED)
```

To run the targets:

```sh
cmake --build <dir> [<options>] --target shellcheck
```

#### `noa_target_doxygen`

Setup [Doxygen](https://www.doxygen.nl) with a templated configuration file.

```cmake
noa_target_doxygen(CONFIG [config] OUTPUT [output])
```

On your configuration file, make sure to set `OUTPUT_DIRECTORY` as follows:

```
OUTPUT_DIRECTORY       = @NOA_TARGET_DOXYGEN_OUTPUT@
```

After running this function, you will have a new target at your disposal:

- `doxygen`: Run Doxygen and store the output in the `OUTPUT` directory

For example:

```cmake
noa_target_doxygen(CONFIG "${PROJECT_SOURCE_DIR}/Doxyfile.in"
  OUTPUT "${CMAKE_CURRENT_BINARY_DIR}/docs")
```

To run the targets:

```sh
cmake --build <dir> [<options>] --target doxygen
```

#### `noa_add_default_options`

Configure a target with an opinionated set of strict compiler options. This
function is used by default when making use of `noa_library`.

```cmake
noa_add_default_options([visibility] [target])
```

For example:

```cmake
noa_add_default_options(PUBLIC my_lib)
````

#### `noa_add_vectorization_diagnostics`

If possible, configure the given compiler to emit loop vectorization
diagnostics during compilation.

```cmake
noa_add_vectorization_diagnostics([target])
```

For example:

```cmake
noa_add_vectorization_diagnostics(my_lib)
````

#### `noa_sanitizer`

Provides a unified interface for setting up a set of compiler sanitizers
project-wide.

```cmake
noa_sanitizer(NAME [sanitizer])
```

Supported sanitizers and their respective compilers are as follows:

| Sanitizer   | Compiler | Description                                                    |
|-------------|----------|----------------------------------------------------------------|
| `address`   | LLVM     | Clang [AddressSanitizer][ClangAddressSanitizer]                |
| `memory`    | LLVM     | Clang [MemorySanitizer][ClangMemorySanitizer]                  |
| `undefined` | LLVM     | Clang [UndefinedBehaviorSanitizer][UndefinedBehaviorSanitizer] |

[ClangAddressSanitizer]: https://clang.llvm.org/docs/AddressSanitizer.html
[ClangMemorySanitizer]: https://clang.llvm.org/docs/MemorySanitizer.html
[UndefinedBehaviorSanitizer]: https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html

For example:

```cmake
noa_sanitizer(NAME address)
```

#### `noa_googletest`

Instantiate a C++ executable that links with GoogleTest.

```cmake
noa_googletest(
  [NAMESPACE [namespace]]
  PROJECT [project]
  NAME [name]
  VARIANT [variant]
  FOLDER [folder]
  SOURCES [globs...])
```

Calling this function will result in the following:

- A target called `[<namespace>_]<project>_<name>_unit`

#### `noa_googlebenchmark`

Instantiate a C++ executable that links with GoogleBenchmark.

```cmake
noa_googlebenchmark(
  [NAMESPACE [namespace]]
  PROJECT [project]
  FOLDER [folder]
  SOURCES [globs...])
```

Calling this function will result in the following:

- A target called `[<namespace>_]<project>_benchmark`

#### Tips & Tricks

- To better debug issues raised by the `undefined` sanitizer on LLVM, run with
  LLDB along with the `-fsanitize-trap=all` compiler option and set the
  `UBSAN_OPTIONS=print_stacktrace=1` environment variable

### Commands

#### `noa_command_copy_file`

The built-in [`file`](https://cmake.org/cmake/help/latest/command/file.html)
command can be used to copy a file during the configure phase. Instead, this
command copies a file at the build step to deal with generated files or as an
optimization.

```cmake
noa_command_copy_file(FROM [input] TO [output])
```

For example, you can declare a file to be copied at built-time, and then
reference such output in a target for the copying to actually take place:

```cmake
noa_command_copy_file(FROM input.txt TO "${CMAKE_CURRENT_BINARY_DIR}/output.txt")
add_custom_target(do_copy DEPENDS "${CMAKE_CURRENT_BINARY_DIR}/output.txt")
```

It is highly recommended to always copy files into the binary directory.

### Variables

#### Programming language

- `NOA_LANGUAGES`: A list of the programming languages declared in the last
  [`project`](https://cmake.org/cmake/help/latest/command/project.html)
  invocation

#### Compiler detection

- `NOA_COMPILER_LLVM`: Set to `ON` if using the Clang or AppleClang compilers
- `NOA_COMPILER_GCC`: Set to `ON` if using the GNU GCC compiler
- `NOA_COMPILER_MSVC`: Set to `ON` if using the MSVC compiler

For example:

```cmake
if(NOA_COMPILER_LLVM)
  add_compile_options([...])
endif()
```

### Options

#### `noa_option_enum`

A shortcut for declaring CMake options that correspond to string enumerations.

```cmake
noa_option_enum(NAME [name] DEFAULT [value] DESCRIPTION [description] CHOICES [choices...])
```

This function will validate that user provided values (and your own default
value) matches the provided choices. It will also make sure to provide a nice
selection interface in
[`cmake-gui(1)`](https://cmake.org/cmake/help/latest/manual/cmake-gui.1.html).

For example:

```cmake
noa_option_enum(
  NAME MY_OPTION
  DEFAULT "foo"
  DESCRIPTION "A test enum"
  CHOICES foo bar baz)
```

### Shims

CMake functionality shimmed to work on older versions:

- [`PROJECT_IS_TOP_LEVEL`](https://cmake.org/cmake/help/latest/variable/PROJECT_IS_TOP_LEVEL.html)
