noa_googletest(NAMESPACE sourcemeta PROJECT noa NAME flat_map
  FOLDER "Noa/Flat Map"
  SOURCES flat_map_test.cc)

target_link_libraries(sourcemeta_noa_flat_map_unit
  PRIVATE sourcemeta::noa::hash)
target_link_libraries(sourcemeta_noa_flat_map_unit
  PRIVATE sourcemeta::noa::flat_map)
