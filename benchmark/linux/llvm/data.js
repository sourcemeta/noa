window.BENCHMARK_DATA = {
  "lastUpdate": 1737417060233,
  "repoUrl": "https://github.com/sourcemeta/noa",
  "entries": {
    "Benchmark (linux/llvm)": [
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
        "date": 1737417059918,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2294947953115813,
            "unit": "ns/iter",
            "extra": "iterations: 313492835\ncpu: 2.229395057784973 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.20522662675356,
            "unit": "ns/iter",
            "extra": "iterations: 318310543\ncpu: 2.2051242990088458 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.1943424762263106,
            "unit": "ns/iter",
            "extra": "iterations: 315232754\ncpu: 2.1942098250361393 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.1988863102603715,
            "unit": "ns/iter",
            "extra": "iterations: 317378878\ncpu: 2.1987699729658767 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.4871549047499952,
            "unit": "ns/iter",
            "extra": "iterations: 281321425\ncpu: 2.48700496238422 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.4868247472658984,
            "unit": "ns/iter",
            "extra": "iterations: 281631903\ncpu: 2.486677111293035 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.508472699235676,
            "unit": "ns/iter",
            "extra": "iterations: 281574553\ncpu: 2.50833081496537 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.2651182711092424,
            "unit": "ns/iter",
            "extra": "iterations: 294259606\ncpu: 2.2649718493811886 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.5250521469414577,
            "unit": "ns/iter",
            "extra": "iterations: 281423984\ncpu: 2.524979185853612 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.486521506583184,
            "unit": "ns/iter",
            "extra": "iterations: 281463097\ncpu: 2.486400769618477 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.620319364648754,
            "unit": "ns/iter",
            "extra": "iterations: 55758269\ncpu: 12.620179152261722 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.1470442171812,
            "unit": "ns/iter",
            "extra": "iterations: 9576820\ncpu: 73.146798519759 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.151800943625272,
            "unit": "ns/iter",
            "extra": "iterations: 97991657\ncpu: 7.15146091467767 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.039886072826371,
            "unit": "ns/iter",
            "extra": "iterations: 172373977\ncpu: 4.039774281009943 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 458.14720363773114,
            "unit": "ns/iter",
            "extra": "iterations: 1527109\ncpu: 458.14239389591773 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}