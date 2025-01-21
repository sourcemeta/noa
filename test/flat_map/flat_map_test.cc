#include <gtest/gtest.h>

#include <sourcemeta/noa/flat_map.h>
#include <sourcemeta/noa/hash.h>

#include <string>

TEST(Noa_FlatMap, empty_by_default) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;
  EXPECT_TRUE(map.empty());
  EXPECT_EQ(map.size(), 0);
}

TEST(Noa_FlatMap, clear) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;
  map.clear();
  EXPECT_TRUE(map.empty());
  map.assign("0", true);
  EXPECT_FALSE(map.empty());
  map.clear();
  EXPECT_TRUE(map.empty());
}

TEST(Noa_FlatMap, set_insert_move) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;

  const auto hash_1{map.assign("0", true)};
  const auto hash_2{map.assign("1", false)};
  const auto hash_3{map.assign("2", true)};

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 3);

  EXPECT_NE(map.find("0", hash_1), map.cend());
  EXPECT_NE(map.find("1", hash_2), map.cend());
  EXPECT_NE(map.find("2", hash_3), map.cend());

  EXPECT_EQ(map.find("3", map.hash("3")), map.cend());

  EXPECT_EQ(map.find("0", hash_1)->first, "0");
  EXPECT_EQ(map.find("1", hash_2)->first, "1");
  EXPECT_EQ(map.find("2", hash_3)->first, "2");
  EXPECT_TRUE(map.find("0", hash_1)->second);
  EXPECT_FALSE(map.find("1", hash_2)->second);
  EXPECT_TRUE(map.find("2", hash_3)->second);

  EXPECT_TRUE(map.at("0", hash_1));
  EXPECT_FALSE(map.at("1", hash_2));
  EXPECT_TRUE(map.at("2", hash_3));
}

TEST(Noa_FlatMap, set_assign_move) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;

  const auto hash_1{map.assign("0", true)};
  const auto hash_2{map.assign("1", false)};
  const auto hash_3{map.assign("1", true)};

  EXPECT_EQ(hash_2, hash_3);

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 2);

  EXPECT_NE(map.find("0", hash_1), map.cend());
  EXPECT_NE(map.find("1", hash_2), map.cend());

  EXPECT_EQ(map.find("0", hash_1)->first, "0");
  EXPECT_EQ(map.find("1", hash_2)->first, "1");
  EXPECT_TRUE(map.find("0", hash_1)->second);
  EXPECT_TRUE(map.find("1", hash_2)->second);

  EXPECT_TRUE(map.at("0", hash_1));
  EXPECT_TRUE(map.at("1", hash_2));
}

TEST(Noa_FlatMap, set_insert_copy) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;

  const std::string key_1{"0"};
  const std::string key_2{"1"};
  const std::string key_3{"2"};

  const bool value_1{true};
  const bool value_2{false};
  const bool value_3{true};

  const auto hash_1{map.assign(key_1, value_1)};
  const auto hash_2{map.assign(key_2, value_2)};
  const auto hash_3{map.assign(key_3, value_3)};

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 3);

  EXPECT_NE(map.find(key_1, hash_1), map.cend());
  EXPECT_NE(map.find(key_2, hash_2), map.cend());
  EXPECT_NE(map.find(key_3, hash_3), map.cend());

  EXPECT_EQ(map.find(key_1, hash_1)->first, key_1);
  EXPECT_EQ(map.find(key_2, hash_2)->first, key_2);
  EXPECT_EQ(map.find(key_3, hash_3)->first, key_3);
  EXPECT_TRUE(map.find(key_1, hash_1)->second);
  EXPECT_FALSE(map.find(key_2, hash_2)->second);
  EXPECT_TRUE(map.find(key_3, hash_3)->second);

  EXPECT_TRUE(map.at(key_1, hash_1));
  EXPECT_FALSE(map.at(key_2, hash_2));
  EXPECT_TRUE(map.at(key_3, hash_3));
}

TEST(Noa_FlatMap, set_assign_copy) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;

  const std::string key_1{"0"};
  const std::string key_2{"1"};

  const bool value_1{true};
  const bool value_2{false};
  const bool value_3{true};

  const auto hash_1{map.assign(key_1, value_1)};
  const auto hash_2{map.assign(key_2, value_2)};
  const auto hash_3{map.assign(key_2, value_3)};

  EXPECT_EQ(hash_2, hash_3);

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 2);

  EXPECT_NE(map.find(key_1, hash_1), map.cend());
  EXPECT_NE(map.find(key_2, hash_2), map.cend());

  EXPECT_EQ(map.find(key_1, hash_1)->first, key_1);
  EXPECT_EQ(map.find(key_2, hash_2)->first, key_2);
  EXPECT_TRUE(map.find(key_1, hash_1)->second);
  EXPECT_TRUE(map.find(key_2, hash_2)->second);

  EXPECT_TRUE(map.at(key_1, hash_1));
  EXPECT_TRUE(map.at(key_2, hash_2));
}

TEST(Noa_FlatMap, erase) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;
  EXPECT_EQ(map.erase("0"), 0);

  const auto hash_1{map.assign("1", true)};
  const auto hash_2{map.assign("2", false)};
  EXPECT_EQ(map.size(), 2);
  EXPECT_TRUE(map.at("1", hash_1));
  EXPECT_FALSE(map.at("2", hash_2));

  EXPECT_EQ(map.erase("1"), 1);
  EXPECT_EQ(map.size(), 1);
  EXPECT_FALSE(map.at("2", hash_2));

  EXPECT_EQ(map.erase("2", hash_2), 0);
  EXPECT_EQ(map.size(), 0);
}

TEST(Noa_FlatMap, initializer_list) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map{{"0", true}, {"1", true}, {"2", true}, {"1", false}};

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 3);

  EXPECT_NE(map.find("0", map.hash("0")), map.cend());
  EXPECT_NE(map.find("1", map.hash("1")), map.cend());
  EXPECT_NE(map.find("2", map.hash("2")), map.cend());

  EXPECT_EQ(map.find("0", map.hash("0"))->first, "0");
  EXPECT_EQ(map.find("1", map.hash("1"))->first, "1");
  EXPECT_EQ(map.find("2", map.hash("2"))->first, "2");

  EXPECT_TRUE(map.at("0", map.hash("0")));
  EXPECT_FALSE(map.at("1", map.hash("1")));
  EXPECT_TRUE(map.at("2", map.hash("2")));
}

TEST(Noa_FlatMap, iterators) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map{{"0", true}, {"1", false}, {"2", true}};

  std::vector<std::string> keys;
  std::vector<bool> values;
  for (const auto &entry : map) {
    keys.push_back(entry.first);
    values.push_back(entry.second);
  }

  EXPECT_EQ(keys.size(), 3);
  EXPECT_EQ(values.size(), 3);

  EXPECT_TRUE(map.at("0", map.hash("0")));
  EXPECT_FALSE(map.at("1", map.hash("1")));
  EXPECT_TRUE(map.at("2", map.hash("2")));
}

TEST(Noa_FlatMap, equality_same_size_true) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map_1{{"0", true}, {"1", false}, {"2", true}};
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map_2{{"2", true}, {"1", false}, {"0", true}};

  EXPECT_EQ(map_1, map_2);
}

TEST(Noa_FlatMap, equality_same_size_false) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map_1{{"0", true}, {"1", false}, {"2", true}};
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map_2{{"0", true}, {"1", true}, {"2", true}};

  EXPECT_NE(map_1, map_2);
}

TEST(Noa_FlatMap, equality_different_size_false) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map_1{{"0", true}, {"1", true}, {"2", true}};
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map_2{{"0", true}, {"1", true}};

  EXPECT_NE(map_1, map_2);
}

TEST(Noa_FlatMap, at_modify_without_hash) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;
  map.assign("0", true);
  map.assign("1", false);
  map.at("0", map.hash("0")) = false;
  map.at("1", map.hash("1")) = true;
  EXPECT_EQ(map.size(), 2);
  EXPECT_FALSE(map.at("0", map.hash("0")));
  EXPECT_TRUE(map.at("1", map.hash("1")));
}

TEST(Noa_FlatMap, at_modify_with_hash) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;
  const auto hash_1{map.assign("0", true)};
  const auto hash_2{map.assign("1", false)};
  map.at("0", hash_1) = false;
  map.at("1", hash_2) = true;
  EXPECT_EQ(map.size(), 2);
  EXPECT_FALSE(map.at("0", map.hash("0")));
  EXPECT_TRUE(map.at("1", map.hash("1")));
}

TEST(Noa_FlatMap, contains) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;

  const auto hash_1{map.assign("0", true)};
  const auto hash_2{map.assign("1", false)};
  const auto hash_3{map.assign("2", true)};

  EXPECT_FALSE(map.empty());
  EXPECT_EQ(map.size(), 3);

  EXPECT_TRUE(map.contains("0", hash_1));
  EXPECT_TRUE(map.contains("1", hash_2));
  EXPECT_TRUE(map.contains("2", hash_3));
  EXPECT_FALSE(map.contains("3", map.hash("3")));

  EXPECT_TRUE(map.contains("0", hash_1));
  EXPECT_TRUE(map.contains("1", hash_2));
  EXPECT_TRUE(map.contains("2", hash_3));
}

TEST(Noa_FlatMap, try_at) {
  sourcemeta::noa::FlatMap<std::string, bool,
                           sourcemeta::noa::StandardHash<std::string>>
      map;

  const auto hash{map.assign("0", true)};
  EXPECT_TRUE(*map.try_at("0", hash));
  EXPECT_EQ(map.try_at("1", map.hash("1")), nullptr);
}
