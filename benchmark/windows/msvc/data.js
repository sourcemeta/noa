window.BENCHMARK_DATA = {
  "lastUpdate": 1737461919569,
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
      }
    ]
  }
}