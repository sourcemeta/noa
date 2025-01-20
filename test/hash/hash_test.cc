#include <gtest/gtest.h>

#include <sourcemeta/noa/hash.h>

#include <string>

TEST(Noa_Hash, standard_hash_string) {
  sourcemeta::noa::StandardHash<std::string> hasher;
  EXPECT_EQ(hasher("foo"), hasher("foo"));
  EXPECT_NE(hasher("foo"), hasher("fooo"));
}
