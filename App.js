// import React, { createContext, useState } from "react";
// import Lists from "./Components/SelectList/AllList";
// import AllItems from "./Components/SelectList/AllItems";
// import SelectItems from "./Components/SelectList/SelectItems";
// // import SongDetail from "./Components/Songs/SongDetail";
// // import SongList from "./Components/Songs/SongList";
// // import Calculator from "./Components/Calculator/Calculator";
// // import OtherHook from "./Components/OtherHook";
// // import Todo from "./Components/Todo";
// // import Form from "./Components/Form/Form";
// // import HOC from "./Components/HOC";
// // import QOne from "./Components/question 1/QOne";


// export const selectedList = createContext([]);

// function App() {

//   const [selectList, setSelectList] = useState([])

//   const changeCheck = (Index) => {
//     Lists.map(lists => {
//       if (lists.id === Index + 1) {
//         if (lists.check) {
//           lists.check = false;
//           setSelectList(selectList.filter(v => v.id !== Index + 1))
//         } else {
//           lists.check = true
//           setSelectList([...selectList, lists])
//         }
//       }
//     })
//   }

//   return (
//     // <Todo/>
//     // <Form />
//     // <HOC names="moa" age="20" />
//     // <QOne />
//     // <OtherHook />
//     // <Calculator />
//     // <>
//     //   <SongList />
//     //   <SongDetail />
//     // </>
//     <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//       <AllItems changeCheck={changeCheck} />
//       <selectedList.Provider value={selectList}>
//         <SelectItems />
//       </selectedList.Provider>
//     </div>
//   )
// }


















// import React from "react";
// import AllItems from "./Components/SelectList/AllItems";
// import Context from "./Components/SelectList/Context";
// import SelectItems from "./Components/SelectList/SelectItems";

// function App() {
//   return (
//     <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//       <Context>
//         <AllItems />
//         <SelectItems />
//       </Context>
//     </div>
//   )
// }

// export default App;



















import React from "react";
import CustomForm from "./Components/CustomFormik/Form/CustomForm";

function App() {
  
  return (
    <>
      <CustomForm />
    </>
  )
}

export default App;


