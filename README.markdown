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

To make use of Noa in a CMake project (after installing it into your project
using `vendorpull`), add the following statements *after* the first call to
[`project`](https://cmake.org/cmake/help/latest/command/project.html):

```cmake
include(vendor/noa/cmake/noa.cmake)
```

### Functions

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

### Shims

CMake functionality shimmed to work on older versions:

- [`PROJECT_IS_TOP_LEVEL`](https://cmake.org/cmake/help/latest/variable/PROJECT_IS_TOP_LEVEL.html)
