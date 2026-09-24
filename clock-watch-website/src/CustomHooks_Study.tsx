//###---Applying the custom hook made -> useTodos

//Import the custom hook made for this purpose esp
import {useTodos} from "./CustomHooks/useTodos";


function CustomHooks_Study(){
    const todos = useTodos(); // get those todos

    return (
        <div>
            {(todos as { title: string }[]).map(t => 
            <div
                style = {{
                    padding : "20px",
                    border:"2px solid black",
                    margin : "20px",

                }}
                >
                {t.title}
            </div>)}
        </div>
    );
}

export default CustomHooks_Study;