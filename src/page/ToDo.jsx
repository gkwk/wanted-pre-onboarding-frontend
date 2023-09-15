import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from "../htmlpreset/Header";
import Footer from "../htmlpreset/Footer";
import { useState, useEffect } from "react";


function ToDo() {
    const navigate = useNavigate();

    const [ToDo_List,set_ToDo_List] = useState({})

    const [ToDo_List_idEditing,set_ToDo_List_idEditing] = useState({})

    const [ToDo_List_temptodo,set_ToDo_List_temptodo] = useState({})

    function NavActivator()  {
        document.getElementById('page_todo').className += " active";
    }

    function createTodo(event) {
        event.preventDefault()

        const TargetURL = "https://www.pre-onboarding-selection-task.shop/todos"
        
        if (localStorage.getItem("access_token")){
            fetch(TargetURL, {
                headers: {
                    "Authorization": "Bearer "+localStorage.getItem("access_token"),
                    "Content-Type": "application/json"
                },
                method: 'post',
                body: JSON.stringify({
                    "todo": ToDo_New,
                    })
            })
            .then(response => {
                if (response.status === 201) {
                    return response.json()
                }
            })
            .then(response => {
                set_ToDo_New("")

                console.log(response)

                const json_array = response

                set_ToDo_List(ToDo_List => ({
                    ...ToDo_List,
                    [json_array["id"]]:{
                        "todo" : json_array["todo"],
                        "isCompleted": json_array["isCompleted"]
                }}))

                set_ToDo_List_idEditing(ToDo_List_idEditing => ({
                    ...ToDo_List_idEditing,
                    [json_array["id"]]:false
                }));

                set_ToDo_List_temptodo(ToDo_List_temptodo => ({
                    ...ToDo_List_temptodo,
                    [json_array["id"]]: json_array["todo"]
                }));
            });
        }
    }

    function getTodo(event) {
        event.preventDefault()

        const TargetURL = "https://www.pre-onboarding-selection-task.shop/todos"
        
        if (localStorage.getItem("access_token")){

            fetch(TargetURL, {
                headers: {
                    "Authorization": "Bearer "+localStorage.getItem("access_token")
                },
                method: 'get'
            })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(response => {
                return response
            })
        }
    }

    function upateTodo(event) {
        event.preventDefault()

        const TargetURL = "https://www.pre-onboarding-selection-task.shop/todos"
        
        if (localStorage.getItem("access_token")){

            // console.log(form_values.email)

            fetch(TargetURL, {
                headers: {
                    "Authorization": "Bearer "+localStorage.getItem("access_token"),
                    "Content-Type": "application/json"
                },
                method: 'put',
                body: JSON.stringify({
                    "todo": "",
                    "isCompleted": true,
                    })
            })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(response => {
                console.log(response)
            })
        }
    }

    function deleteTodo(event) {
        event.preventDefault()

        const TargetURL = "https://www.pre-onboarding-selection-task.shop/todos/"+event.target.getAttribute("comment_id")
        
        const targetid = event.target.getAttribute("comment_id")

        if (localStorage.getItem("access_token")){

            fetch(TargetURL, {
                headers: {
                    "Authorization": "Bearer "+localStorage.getItem("access_token")
                },
                method: 'delete',
            })
            .then(response => {
                if (response.status === 204) {
                    var copy1 = ToDo_List
                    var copy2 = ToDo_List_idEditing
                    var copy3 = ToDo_List_temptodo

                    delete copy1[targetid]
                    delete copy2[targetid]
                    delete copy3[targetid]

                    set_ToDo_List(({...copy1}))
                    set_ToDo_List_idEditing(({...copy2}))
                    set_ToDo_List_temptodo(({...copy3}))

                    console.log(response)

                    console.log(copy1)
                }
            })
        }
    }

    useEffect(() => {
        if (!("access_token" in localStorage)) {
            return navigate("/signin")
        }

        NavActivator();

        const TargetURL = "https://www.pre-onboarding-selection-task.shop/todos"
        
        fetch(TargetURL, {
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("access_token")
            },
            method: 'get'
        })
        .then(response => {
            if (response.status === 200) {
                console.log(response)
                return response.json()
            }
        })
        .then(response => {
            console.log(response);

            const json_array = response;

            // for (let index = 0; index < json_array.length; index++) {
            //     const element = json_array[index];

            //     set_ToDo_List(ToDo_List => ({
            //         ...ToDo_List,
            //         [element["id"]]:{
            //             "todo" : element["todo"],
            //             "isCompleted": element["isCompleted"]
            //     }}))
            // }

            json_array.forEach(element => {
                set_ToDo_List(ToDo_List => ({
                    ...ToDo_List,
                    [element["id"]]:{
                        "todo" : element["todo"],
                        "isCompleted": element["isCompleted"]
                }}))

                set_ToDo_List_idEditing(ToDo_List_idEditing => ({
                    ...ToDo_List_idEditing,
                    [element["id"]]:false
                }));

                set_ToDo_List_temptodo(ToDo_List_temptodo => ({
                    ...ToDo_List_temptodo,
                    [element["id"]]: element["todo"]
                }));
            });
        })
    }, []);

    useEffect(()=>{
        
        console.log(ToDo_List)
        console.log(ToDo_List_idEditing)
        console.log(ToDo_List_temptodo)
    },[ToDo_List,ToDo_List_idEditing,ToDo_List_temptodo])

    function isCompletedChange(event){
        set_ToDo_List({
            ...ToDo_List,
            [event.target.getAttribute("comment_id")]:{
                ...ToDo_List[event.target.getAttribute("comment_id")],
                "isCompleted": event.target.checked
            }
        })
    }

    function todoChange(event){
        set_ToDo_List({
            ...ToDo_List,
            [event.target.getAttribute("comment_id")]:{
                ...ToDo_List[event.target.getAttribute("comment_id")],
                "todo": ToDo_List_temptodo[event.target.getAttribute("comment_id")]
            }
        })
    }

    function temptodoChange(event){
        set_ToDo_List_temptodo({
            ...ToDo_List_temptodo,
            [event.target.getAttribute("comment_id")]:event.target.value
        })
    }

    function temptodoReset(event){
        set_ToDo_List_temptodo({
            ...ToDo_List_temptodo,
            [event.target.getAttribute("comment_id")]:ToDo_List[event.target.getAttribute("comment_id")]["todo"]
        })
    }

    function isEditingChange(event){
        set_ToDo_List_idEditing({
            ...ToDo_List_idEditing,
            [event.target.getAttribute("comment_id")]:!(ToDo_List_idEditing[event.target.getAttribute("comment_id")])
        })
    }


    const [ToDo_New,set_ToDo_New] = useState("")

    function todoNewChange(event) {
        set_ToDo_New(event.target.value)
    }



    function ToDolisting(ToDoList) {
        
    

        return (
            <div>
                {/* <div className={ExampleCondition ? "" : undefined}>text</div> */}
                {Object.keys(ToDoList).map((id) => (
                    <div key={id}>
                        <li>
                            <label>
                                {/* <input type="checkbox" comment_id={id} checked={ToDoList[id]["isCompleted"]} onChange={isCompletedChange}/> */}
                                
                                
                                {ToDo_List_idEditing[id] ?
                                    <div>
                                        <input type="checkbox" comment_id={id} checked={ToDoList[id]["isCompleted"]} onChange={isCompletedChange}/>
                                        <input data-testid="modify-input" comment_id={id} value={ToDo_List_temptodo[id]} onChange={temptodoChange} />
                                        <button data-testid="submit-button" comment_id={id} onClick={(event) => {todoChange(event);isEditingChange(event)}}>제출</button>
                                        <button data-testid="cancel-button" comment_id={id} onClick={(event) => {temptodoReset(event);isEditingChange(event)}}>취소</button>
                                    </div>

                                :
                                    <div>
                                        <input type="checkbox" comment_id={id} checked={ToDoList[id]["isCompleted"]} onChange={isCompletedChange}/>
                                        <span>{ToDoList[id]["todo"]}</span>
                                        <button data-testid="modify-button" comment_id={id} onClick={isEditingChange}>수정</button>
                                        <button data-testid="delete-button" comment_id={id} onClick={deleteTodo}>삭제</button>
                                    </div>
                                }
                            </label>

                            {/* <button data-testid="modify-button">수정</button>
                            <button data-testid="delete-button">삭제</button>

                            <input data-testid="modify-input" />
                            <button data-testid="submit-button">제출</button>
                            <button data-testid="cancel-button">취소</button> */}
                        </li>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="d-flex flex-column h-100">
            { Header() }

            { ToDolisting(ToDo_List) }

            {/* <li>
                <label>
                    <input type="checkbox" />
                    <span>TODO 1</span>
                </label>
                <button data-testid="modify-button">수정</button>
                <button data-testid="delete-button">삭제</button>

                <input data-testid="modify-input" />
                <button data-testid="submit-button">제출</button>
                <button data-testid="cancel-button">취소</button>
            </li>
            <li>
                <label>
                    <input type="checkbox" />
                    <span>TODO 2</span>
                </label>
                <button data-testid="modify-button">수정</button>
                <button data-testid="delete-button">삭제</button>
                
                <input data-testid="modify-input" />
                <button data-testid="submit-button">제출</button>
                <button data-testid="cancel-button">취소</button>
            </li> */}

            <input data-testid="new-todo-input" value={ToDo_New} onChange={todoNewChange} />
            <button data-testid="new-todo-add-button" onClick={createTodo}>추가</button>


            { Footer() } 
        </div>
    );

    // return (
    //     <div className="d-flex flex-column h-100">
    //         { Header() }

    //         <li>
    //             <label>
    //                 <input type="checkbox" />
    //                 <span>TODO 1</span>
    //             </label>
    //             <button data-testid="modify-button">수정</button>
    //             <button data-testid="delete-button">삭제</button>

    //             <input data-testid="modify-input" />
    //             <button data-testid="submit-button">제출</button>
    //             <button data-testid="cancel-button">취소</button>
    //         </li>
    //         <li>
    //             <label>
    //                 <input type="checkbox" />
    //                 <span>TODO 2</span>
    //             </label>
    //             <button data-testid="modify-button">수정</button>
    //             <button data-testid="delete-button">삭제</button>
                
    //             <input data-testid="modify-input" />
    //             <button data-testid="submit-button">제출</button>
    //             <button data-testid="cancel-button">취소</button>
    //         </li>

    //         <input data-testid="new-todo-input" />
    //         <button data-testid="new-todo-add-button">추가</button>


    //         { Footer() } 
    //     </div>
    // );
};

export default ToDo;