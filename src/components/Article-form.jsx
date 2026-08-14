import { useState } from "react"
import { Input, Textarea } from "../ui"
import { useSelector } from "react-redux"

const ArticleForm = props => {
    const { title, setTitle, description, setDescription, body, setBody, formSubmit } = props
    const {isLoading} = useSelector (state => state.article)
    return (
        <div>
            <form onSubmit={formSubmit}>
                <Input label="Title" state={title} setState={setTitle} />
                <Textarea label={'Description'} state={description} setState={setDescription} />
                <Textarea label={'Body'} state={body} setState={setBody} height={'200px'} />
                <button className="btn btn-primary w-100 py-2 mt-2" type="submit" disabled ={isLoading} >
                    {isLoading ? "Loading" : "Create"}
                </button>
            </form>
        </div>
    )
}

export default ArticleForm