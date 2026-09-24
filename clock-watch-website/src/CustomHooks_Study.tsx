//----------------------------------------------------------

//###---Props Drilling and Roll-up the state Concepts ----###

// -----------------------------------------------------------

//Import the custom hook made for this purpose esp
import {useTodos, type TodoType} from "./CustomHooks/useTodos";

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
            <div>{title}</div>

            
                        {/* // setTodos( todos => todos.filter(x => x.id !== id) ) */}
            <DeleteTodo id = {id} setTodos = {setTodos} />
                  
        </div>
    )
    
    

}

function DeleteTodo({id, setTodos}: Pick<TodoType, "id"> & { setTodos: React.Dispatch<React.SetStateAction<TodoType[]>> }){
    return(
        <div>
            
            <span 
                style = {{
                    background : "lightBlue",
                    cursor : "pointer",
                    border : "2px solid black"
                }}

                onClick = { 
                    ()=>{
                        setTodos( todos => todos.filter(x => x.id !== id) )        
                    }
                }
            >
                Delete
            </span>
        </div>

    )
    
}

export default CustomHooks_Study;

//-------------------------------
// #Props Drilling and how it is seen here :
// **Prop drilling** occurs when you pass data through multiple layers of intermediate components that do not need the data themselves, just to reach a deeply nested child component that does.

// ---

// ### How Prop Drilling Works (Concept)

// ```
// [Parent Component] (holds state)
//        ↓  (passes prop)
// [Child Component] (doesn't use prop, just passes it along)
//        ↓  (passes prop)
// [Grandchild Component] (actually uses the prop)

// ```

// In this scenario, `Child Component` suffers from prop drilling—it acts strictly as a pipe, creating clutter, unnecessary coupling, and fragile re-renders.

// ---

// ### Rolling Up the State (Lifting State Up)

// **Rolling up the state** (commonly called "Lifting State Up") is the process of moving shared state up to the **closest common ancestor** component of all the components that need to read or update that state.

// #### Why Do It?

// When two or more sibling components need access to the same state or need to communicate changes to each other, React’s single-direction data flow requires that state to live above both of them in the component hierarchy.

// #### How It Works:

// 1. Identify the common parent of the components that need the state.
// 2. Move the `useState` hook into that common parent.
// 3. Pass the state down as props to children that need to display it.
// 4. Pass state updater functions (e.g., `setCount` or custom handler functions) down as callback props to children that need to trigger state changes.

// ```jsx
// // Common Ancestor: Holds state and handles updates
// function Parent() {
//   const [value, setValue] = useState('');

//   return (
//     <>
//       <InputComponent value={value} onChange={setValue} />
//       <DisplayComponent value={value} />
//     </>
//   );
// }

// ```