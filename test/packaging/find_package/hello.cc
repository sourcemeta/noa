#include <sourcemeta/noa/flat_map.h>
#include <sourcemeta/noa/hash.h>

#include <cstdlib>  // EXIT_SUCCESS
#include <iostream> // std::cout
#include <string>   // std::string

auto main() -> int {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;
  const auto hash{map.assign("foo", true)};

  if (map.contains("foo", hash)) {
    std::cout << "HAS FOO\n";
  } else {
    std::cout << "DOES NOT HAVE FOO\n";
  }

  return EXIT_SUCCESS;
}
