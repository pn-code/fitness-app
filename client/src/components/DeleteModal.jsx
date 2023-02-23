import React from 'react'

const DeleteModal = ({itemType, title}) => {
  return (
    <form>
        <h1>Are you sure you want to delete this plan/entry?</h1>
        <section>
        <button>Delete</button>
        <button>Cancel</button>
        </section>
    </form>
  )
}

export default DeleteModal