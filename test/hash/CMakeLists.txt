include(noa)

noa_googletest(NAMESPACE sourcemeta PROJECT noa NAME hash
  FOLDER "Noa/Hash"
  SOURCES hash_test.cc)

target_link_libraries(sourcemeta_noa_hash_unit
  PRIVATE sourcemeta::noa::hash)
