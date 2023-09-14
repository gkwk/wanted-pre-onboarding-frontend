// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../htmlpreset/Header";
import Footer from "../htmlpreset/Footer";
import { useState, useEffect } from "react";


function ToDo() {
    function NavActivator()  {
        document.getElementById('page_todo').className += " active";
    }

    useEffect(() => {
        // console.log(`useEffect`);
        NavActivator();
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            { Header() }

            <li>
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
            </li>

            <input data-testid="new-todo-input" />
            <button data-testid="new-todo-add-button">추가</button>


            { Footer() } 
        </div>
    );
};

export default ToDo;