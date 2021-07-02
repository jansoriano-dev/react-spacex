import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
const Search = ({getQuery}) => {

    const [text,setText]=useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section>
            <Form>
            <Form.Control type="text" placeholder="Search Launch" autoFocus style={{marginBottom:'30px'}} value={text} onChange={(e)=>onChange(e.target.value)} />
            </Form>
        </section>
    )
}

export default Search
