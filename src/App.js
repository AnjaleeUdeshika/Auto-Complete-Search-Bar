import logo from "./logo.svg";
import "./App.css";
import Search from "./Search/AutoComplete";

function App() {
  const ProgLang = [
    "A.NET (A#/A sharp)", "A-0 System", "A+ (A plus)", "ABAP", "ABC", "ABC ALGOL",
    "Babbage", "Ballerina", "Bash", "BASIC", "BETA",
    "C – ISO/IEC 9899","C-- (C minus minus)", "C++ (C plus plus)", "C*", "C# (C sharp)", "C/AL",
    "Dart", "Darwin", "DataFlex", "Datalog",
    "Ease", "Easy PL/I", "EASYTRIEVE PLUS", "eC", "ECMAScrip",
    "F# (F sharp)", "F*", "Factor", "Fantom", "FAUST",
    "Game Maker Language (Scripting language)", "GameMonkey Script"," GAMS (General Algebraic Modeling System)", "GAP", "G-code",
    "Hack"," HAGGIS", "HAL/S", "Halide (programming language)","Hamilton C shell",
    "Io", "Icon", "IBM Basic assembly language", 
    "Javascript", "Java", "J# (J sharp)", "J++ (J plus plus)", "JADE",
    "Python", "Nodejs", "Reactjs"
  ];

  return (
    <div className="container">
      <Search lang={ProgLang} />
    </div>
  );
}

export default App;