//对象解构赋值
// export default ({ onClick, text }) => {
//     return (
//         <button onClick={onClick} >{text}</button>
//     )
// }

//箭头函数化简
export default (props) => (<button onClick={props.onClick} >{props.text}</button>)