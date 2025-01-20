include(noa)

noa_googletest(NAMESPACE sourcemeta PROJECT noa NAME regex
  FOLDER "Noa/Regex"
  SOURCES regex_matches_test.cc regex_to_regex_test.cc)

target_link_libraries(sourcemeta_noa_regex_unit
  PRIVATE sourcemeta::noa::regex)
