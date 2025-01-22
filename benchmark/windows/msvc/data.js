window.BENCHMARK_DATA = {
  "lastUpdate": 1737572725254,
  "repoUrl": "https://github.com/sourcemeta/noa",
  "entries": {
    "Benchmark (windows/msvc)": [
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4fe72e795c684035712bc7ac38d96e84f62ff414",
          "message": "Implement a general-purpose `regex` module (#17)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-20T19:49:42-04:00",
          "tree_id": "b414871b4630b8a362a5bb2110aab958bc223b8d",
          "url": "https://github.com/sourcemeta/noa/commit/4fe72e795c684035712bc7ac38d96e84f62ff414"
        },
        "date": 1737417133696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 7.0269497767862426,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 7.051454241071246,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 6.882814732143774,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 7.016285714285887,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.311271205357224,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.460249999998884,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.164453124999883,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.144873883928276,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 7.336139508928546,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 6.939464285713776,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 11.824720312500148,
            "unit": "ns/iter",
            "extra": "iterations: 64000000\ncpu: 11.962890625 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 137.62241071428807,
            "unit": "ns/iter",
            "extra": "iterations: 5600000\ncpu: 139.50892857142858 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.265065132745088,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 10.253906204223632 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.455962053571749,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 590.9959821429262,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75ac6ef239d0167beeb69e5dc49695ed3ea2d63a",
          "message": "Integrate with Doxygen (#18)\n\nFixes: https://github.com/sourcemeta/noa/issues/16\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T08:15:02-04:00",
          "tree_id": "1a85a1066297b60ab65b746822b221cd6486bf60",
          "url": "https://github.com/sourcemeta/noa/commit/75ac6ef239d0167beeb69e5dc49695ed3ea2d63a"
        },
        "date": 1737461905613,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 6.99711941964181,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 7.1485558035711,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 6.913254464285653,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 7.145033482142285,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.185363839286348,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.161357142857484,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.168803571428382,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.21287499999969,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 6.866474330356555,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.801060267857143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 7.333111607144005,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 14.336083864572796,
            "unit": "ns/iter",
            "extra": "iterations: 49777778\ncpu: 14.439174042682259 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 140.18170356329864,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 141.2527838726436 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.308885937501344,
            "unit": "ns/iter",
            "extra": "iterations: 64000000\ncpu: 10.498046875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.66756696428672,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.672991071428571 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 608.5550892857482,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb4bc3f8d5098b313c58f3bdc02818e6606f7d66",
          "message": "Revise installation instructions (#19)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T08:25:44-04:00",
          "tree_id": "34bb6afc3c0aca99c0e2bc48adbb6585252bca66",
          "url": "https://github.com/sourcemeta/noa/commit/cb4bc3f8d5098b313c58f3bdc02818e6606f7d66"
        },
        "date": 1737462482528,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 7.134939732142647,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 7.070341071428438,
            "unit": "ns/iter",
            "extra": "iterations: 112000000\ncpu: 7.114955357142857 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 6.9385946428570024,
            "unit": "ns/iter",
            "extra": "iterations: 112000000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 6.91864843749977,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.801060267857143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.394856026785897,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.165212500000097,
            "unit": "ns/iter",
            "extra": "iterations: 112000000\ncpu: 7.254464285714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.318305770900124,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.324218717302595 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.195168526785699,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 6.935410714285415,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 6.91622767857122,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.801060267857143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 14.337488839285381,
            "unit": "ns/iter",
            "extra": "iterations: 44800000\ncpu: 14.299665178571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 142.0485606228305,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 141.2527838726436 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.296143749999763,
            "unit": "ns/iter",
            "extra": "iterations: 64000000\ncpu: 10.25390625 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.595272321428505,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 600.6581250000055,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00e1e5e9cc3634c066651e77a5b7d52775215bb9",
          "message": "Namespace all CMake utilities under `cmake/noa` (#20)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T08:28:37-04:00",
          "tree_id": "d277552ba69101ab57312412ed68c9c17b86fc20",
          "url": "https://github.com/sourcemeta/noa/commit/00e1e5e9cc3634c066651e77a5b7d52775215bb9"
        },
        "date": 1737462718143,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 7.010639700846387,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 6.905691933456732 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 7.1302399553577605,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 6.998991071429016,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 7.0515279017856,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.4772511160719235,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 8.05831249999984,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 8.021763392857142 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.220126116071717,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.2871071428577086,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 6.938950892856662,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 6.970150669642905,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.311895312500098,
            "unit": "ns/iter",
            "extra": "iterations: 64000000\ncpu: 12.451171875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 138.03610767696617,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 134.97488236719275 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.286439062499042,
            "unit": "ns/iter",
            "extra": "iterations: 64000000\ncpu: 10.25390625 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.552680769855116,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.533482109225527 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 605.0806249999953,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8d36453236abc365f08a76a486f92c84f976fd9",
          "message": "Enable GoogleMock in the GoogleTest setup (#22)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T11:50:03-04:00",
          "tree_id": "3e8d53c7aaefdb8ffbadf3b9f6b142b620374df8",
          "url": "https://github.com/sourcemeta/noa/commit/a8d36453236abc365f08a76a486f92c84f976fd9"
        },
        "date": 1737474779743,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 7.152378348214456,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 7.226364955357541,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 6.948359375000505,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 6.9203330357139645,
            "unit": "ns/iter",
            "extra": "iterations: 112000000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.523498883928528,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.196458705357297,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.2820357142853815,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.320526785713963,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 6.911885044643208,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.801060267857143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 6.850772321429182,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.801060267857143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 14.33249792708758,
            "unit": "ns/iter",
            "extra": "iterations: 49777778\ncpu: 14.439174042682259 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 137.0083800442757,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 134.97488236719275 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.542253571427652,
            "unit": "ns/iter",
            "extra": "iterations: 56000000\ncpu: 10.323660714285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.464051339285405,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 595.6727000000228,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 609.375 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dee6c859895baf918fe3ecca22e4e7a262c5d500",
          "message": "Remove `PARENT_SCOPE` from defaults (#23)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T14:07:32-04:00",
          "tree_id": "c3e4bab5abb3f920d76a5e2e2ab1acf1d1eee70d",
          "url": "https://github.com/sourcemeta/noa/commit/dee6c859895baf918fe3ecca22e4e7a262c5d500"
        },
        "date": 1737483019070,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 6.9751763392858885,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 6.969858258928849,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 7.266782110416213,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.114955325379664 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 7.096404017857668,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.267238839285817,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.5723039840514925,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.533482109225527 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.377213169643047,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.182395089285595,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 6.952336576105266,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 6.905691933456732 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 6.927749969072428,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 6.905691933456732 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 14.404833417834794,
            "unit": "ns/iter",
            "extra": "iterations: 49777778\ncpu: 14.439174042682259 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 137.52804966392534,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 134.97488236719275 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.284542187499746,
            "unit": "ns/iter",
            "extra": "iterations: 64000000\ncpu: 10.25390625 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.612435267857646,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.672991071428571 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 604.7390178571176,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dee6c859895baf918fe3ecca22e4e7a262c5d500",
          "message": "Remove `PARENT_SCOPE` from defaults (#23)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T18:07:32Z",
          "url": "https://github.com/sourcemeta/noa/commit/dee6c859895baf918fe3ecca22e4e7a262c5d500"
        },
        "date": 1737486247311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 7.1030290178570565,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 7.3342734375003715,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 6.988988839285528,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 7.025059151786195,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.528885044643426,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.160505771605141,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.114955325379664 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.375313616071466,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.184841071429154,
            "unit": "ns/iter",
            "extra": "iterations: 112000000\ncpu: 7.254464285714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 6.945890624999254,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 6.995013392857732,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 11.83888928571264,
            "unit": "ns/iter",
            "extra": "iterations: 56000000\ncpu: 11.71875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 136.8180340706428,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 138.11383311991816 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.38100714285812,
            "unit": "ns/iter",
            "extra": "iterations: 56000000\ncpu: 10.323660714285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.470184151785781,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 588.7524999999576,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbc1e2a1acdaf71be1414dc0cae792f45f1f185e",
          "message": "Implement a `try_at` method in `FlatMap` (#24)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T16:20:04-04:00",
          "tree_id": "537b536c2c5aeb5bb70a225671ad35dae85df1dc",
          "url": "https://github.com/sourcemeta/noa/commit/dbc1e2a1acdaf71be1414dc0cae792f45f1f185e"
        },
        "date": 1737491192537,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 7.466733258927962,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 7.249348214285308,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 7.256168271178035,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.114955325379664 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 7.466171875000047,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 8.044094866071255,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 8.021763392857142 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.710590401785693,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.672991071428571 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.755354910714551,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.847377232142857 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.719137276785811,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.847377232142857 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 7.522549107143054,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 7.4382977346498995,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.324218717302595 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 15.037165178572057,
            "unit": "ns/iter",
            "extra": "iterations: 44800000\ncpu: 14.997209821428571 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 153.95723214286505,
            "unit": "ns/iter",
            "extra": "iterations: 4480000\ncpu: 153.45982142857142 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 11.349646874999841,
            "unit": "ns/iter",
            "extra": "iterations: 64000000\ncpu: 11.474609375 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 8.072027642535264,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 8.16127228499432 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 651.8601785714395,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "214d23ba8488792fba67fdf43f96451cd9c1d105",
          "message": "Support accessing `FlatMap` entries by positional indices (#25)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-22T10:35:46-04:00",
          "tree_id": "e3123b35ffa09c5fe13f458cfd99d6b8e02b0081",
          "url": "https://github.com/sourcemeta/noa/commit/214d23ba8488792fba67fdf43f96451cd9c1d105"
        },
        "date": 1737556739276,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 6.9072165178571,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 6.883229910714661,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 7.090626116072078,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 7.217571428571442,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.219037946428435,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.220366485623528,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.114955325379664 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.2370301339283065,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.178620950095945,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.114955325379664 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 6.850829433701918,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 6.696428541533801 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 6.961850000000221,
            "unit": "ns/iter",
            "extra": "iterations: 112000000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 11.88890714285711,
            "unit": "ns/iter",
            "extra": "iterations: 56000000\ncpu: 11.71875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 137.56646037651123,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 138.11383311991816 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.521857812499036,
            "unit": "ns/iter",
            "extra": "iterations: 64000000\ncpu: 10.498046875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.558535714286155,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.672991071428571 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 598.9221428571057,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ce51f80794ad6dfd9547efa0d3b3d8fa85adbcf",
          "message": "Don't use iterators for `FlatMap` equality checks (#26)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-22T14:59:58-04:00",
          "tree_id": "c393324e26ea5082bda351df5422cea63ed82ee6",
          "url": "https://github.com/sourcemeta/noa/commit/2ce51f80794ad6dfd9547efa0d3b3d8fa85adbcf"
        },
        "date": 1737572591582,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 7.166553571428734,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 6.958873883928161,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.801060267857143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 6.92426674107262,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 7.535869419643047,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.334024553572301,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.4755412946420865,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.2601231818739675,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.114955325379664 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.341179687500191,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 6.84923750000012,
            "unit": "ns/iter",
            "extra": "iterations: 112000000\ncpu: 6.8359375 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 7.175982142857101,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 11.905601785713316,
            "unit": "ns/iter",
            "extra": "iterations: 56000000\ncpu: 11.997767857142858 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 138.799962553572,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 138.11383311991816 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.642039062501496,
            "unit": "ns/iter",
            "extra": "iterations: 64000000\ncpu: 10.7421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.533431919643111,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.672991071428571 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 596.2288392857268,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2ce51f80794ad6dfd9547efa0d3b3d8fa85adbcf",
          "message": "Don't use iterators for `FlatMap` equality checks (#26)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-22T18:59:58Z",
          "url": "https://github.com/sourcemeta/noa/commit/2ce51f80794ad6dfd9547efa0d3b3d8fa85adbcf"
        },
        "date": 1737572708364,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 7.0940446428569,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 7.175428571428403,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 6.967736607142529,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.975446428571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 6.954904017858001,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.801060267857143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 7.5241127232139595,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.498604910714286 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 7.3141104910717,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 7.178859342950812,
            "unit": "ns/iter",
            "extra": "iterations: 74666667\ncpu: 7.114955325379664 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 7.439654017857527,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.32421875 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 7.190148437499846,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.149832589285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 6.911563616071196,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 6.801060267857143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 14.30859151785567,
            "unit": "ns/iter",
            "extra": "iterations: 44800000\ncpu: 14.299665178571429 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 139.81977500804607,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 138.11383311991816 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 10.40948392857136,
            "unit": "ns/iter",
            "extra": "iterations: 56000000\ncpu: 10.323660714285714 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 7.639246651785265,
            "unit": "ns/iter",
            "extra": "iterations: 89600000\ncpu: 7.672991071428571 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 601.5742857142317,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}