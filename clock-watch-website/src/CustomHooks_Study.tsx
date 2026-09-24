//###---Applying the custom hook made -> useTodos

//Import the custom hook made for this purpose esp
import {useTodos, type TodoType} from "./CustomHooks/useTodos";

//To get and print the todos 
// function CustomHooks_Study(){
//     const todos = useTodos(); // get those todos

//     return (
//         <div>
//             {(todos as { title: string }[]).map(t => 
//             <div
//                 style = {{
//                     padding : "20px",
//                     border:"2px solid black",
//                     margin : "20px",

//                 }}
//                 >
//                 {t.title}
//             </div>)}
//         </div>
//     );
// }

// export default CustomHooks_Study;



//To Delete the todos printed
function CustomHooks_Study(){

    // Pass the type to useState so it's not inferred as never[]
    const [todos, setTodos] = useTodos();
    // as  [Todo[], React.Dispatch<React.SetStateAction<Todo[]>>]; // get those todos, we need setTodos too for deletion purpose

    return (
        <div>
            {todos.map(t => 
                <Todos
                //Calls a component for deletion and updation while passing the foll componenets
                    key = {t.id}
                    title = {t.title}
                    id  = {t.id}
                    setTodos = {setTodos}
                />
            )}
                      
        </div>
    )
}

function Todos({id , title , setTodos} : TodoType & { setTodos: React.Dispatch<React.SetStateAction<TodoType[]>> }){
    //On page return the title and delete button -> on click deletes/ removes it on page by filter
    return (
        <div
            style = {{
                    padding : "20px",
                    border:"2px solid black",
                    margin : "20px"
                }}
        >
            <div>{title}    </div>

            <button
                onClick = {
                    ()=>{
                        setTodos( todos => todos.filter(x => x.id !== id) )
                    }
                }
            >Delete</button>
        </div>
    )
    
    

}

export default CustomHooks_Study;