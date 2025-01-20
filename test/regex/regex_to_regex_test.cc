#include <gtest/gtest.h>

#include <string>

#include <sourcemeta/noa/regex.h>

TEST(Noa_regex_to_regex, valid_1) {
  const auto regex{sourcemeta::noa::to_regex<std::string>("^foo")};
  EXPECT_TRUE(regex.has_value());
}

TEST(Noa_regex_to_regex, invalid_1) {
  const auto regex{sourcemeta::noa::to_regex<std::string>("(abc")};
  EXPECT_FALSE(regex.has_value());
}
