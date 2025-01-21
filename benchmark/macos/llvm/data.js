window.BENCHMARK_DATA = {
  "lastUpdate": 1737461784701,
  "repoUrl": "https://github.com/sourcemeta/noa",
  "entries": {
    "Benchmark (macos/llvm)": [
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
        "date": 1737417056377,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6342241356513354,
            "unit": "ns/iter",
            "extra": "iterations: 437185773\ncpu: 1.6340810797610281 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6444827960331194,
            "unit": "ns/iter",
            "extra": "iterations: 445933722\ncpu: 1.6442353736145554 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7729042569305817,
            "unit": "ns/iter",
            "extra": "iterations: 432395036\ncpu: 1.7513290786252227 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6480258527166285,
            "unit": "ns/iter",
            "extra": "iterations: 400130328\ncpu: 1.6458412520032737 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9761425536927495,
            "unit": "ns/iter",
            "extra": "iterations: 361284728\ncpu: 1.975591395604188 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9100433364697305,
            "unit": "ns/iter",
            "extra": "iterations: 353337271\ncpu: 1.9099711674628301 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9642150967815455,
            "unit": "ns/iter",
            "extra": "iterations: 355837514\ncpu: 1.963986292912334 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0171159571282944,
            "unit": "ns/iter",
            "extra": "iterations: 354021686\ncpu: 2.016723913348067 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6237020689051995,
            "unit": "ns/iter",
            "extra": "iterations: 424113905\ncpu: 1.623568555244614 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.639764058064854,
            "unit": "ns/iter",
            "extra": "iterations: 431486162\ncpu: 1.638407119994733 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.790700275699684,
            "unit": "ns/iter",
            "extra": "iterations: 106423413\ncpu: 6.788863273911363 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 69.86100868516178,
            "unit": "ns/iter",
            "extra": "iterations: 9944312\ncpu: 69.8565169717119 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.132296042674192,
            "unit": "ns/iter",
            "extra": "iterations: 138331719\ncpu: 5.13172253718614 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.27228296618518,
            "unit": "ns/iter",
            "extra": "iterations: 310880369\ncpu: 2.2721022954009706 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 741.1128093669796,
            "unit": "ns/iter",
            "extra": "iterations: 968510\ncpu: 740.5447543133275 ns\nthreads: 1"
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
        "date": 1737461783298,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.1613355528349345,
            "unit": "ns/iter",
            "extra": "iterations: 387742893\ncpu: 1.829059959069321 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.8203141308055346,
            "unit": "ns/iter",
            "extra": "iterations: 430763929\ncpu: 1.7887105863035253 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.776516712184736,
            "unit": "ns/iter",
            "extra": "iterations: 389081268\ncpu: 1.7523331398210618 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.8211154046509643,
            "unit": "ns/iter",
            "extra": "iterations: 413240217\ncpu: 1.7611257812305325 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.055050341677715,
            "unit": "ns/iter",
            "extra": "iterations: 318633699\ncpu: 2.049566640470126 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1025940102433758,
            "unit": "ns/iter",
            "extra": "iterations: 341010951\ncpu: 2.0921263610680936 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.3644871934788876,
            "unit": "ns/iter",
            "extra": "iterations: 291914794\ncpu: 2.3417038603394684 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.2039351285845634,
            "unit": "ns/iter",
            "extra": "iterations: 337730260\ncpu: 2.1954295715166285 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.712355339624902,
            "unit": "ns/iter",
            "extra": "iterations: 414056631\ncpu: 1.703967397638416 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.7962039767050868,
            "unit": "ns/iter",
            "extra": "iterations: 414358100\ncpu: 1.7906202388706782 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.865350987203323,
            "unit": "ns/iter",
            "extra": "iterations: 81016643\ncpu: 7.78691854709408 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 91.86976058957794,
            "unit": "ns/iter",
            "extra": "iterations: 7828314\ncpu: 89.56692335028967 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.380678172081946,
            "unit": "ns/iter",
            "extra": "iterations: 127379263\ncpu: 6.333417080612253 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.925197335620526,
            "unit": "ns/iter",
            "extra": "iterations: 266496109\ncpu: 2.6989174539880425 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 838.7161760142388,
            "unit": "ns/iter",
            "extra": "iterations: 747576\ncpu: 835.7103491818878 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}