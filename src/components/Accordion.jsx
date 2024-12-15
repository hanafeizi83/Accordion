import React, { useState } from 'react'
const accordionData = [
  {
    id: 1,
    title: 'Accordion one',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio excepturi eos nisi repudiandae qui at maxime, cupiditate nemo, sunt optio porro placeat magnam quaerat dolorem facere ullam, culpa libero ratione!'
  },
  {
    id: 2,
    title: 'Accordion two',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio excepturi eos nisi repudiandae qui at maxime, cupiditate nemo, sunt optio porro placeat magnam quaerat dolorem facere ullam, culpa libero ratione!'
  },
  {
    id: 3,
    title: 'Accordion three',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio excepturi eos nisi repudiandae qui at maxime, cupiditate nemo, sunt optio porro placeat magnam quaerat dolorem facere ullam, culpa libero ratione!'
  },
]
function Accordion() {
  const [open, setOpen] = useState(null)
  const handelOpen = (id) => {
    setOpen(id === open ? 'null' : id)
  }
  return (

    <div className='accordion' >
      {
        accordionData.map(item => <AccordionItem key={item.id} item={item} open={open} onOpen={handelOpen} />)
      }

    </div>
  )
}

export default Accordion
function AccordionItem({ item, open, onOpen }) {

  const isOpen = item.id === open;
  return (
    <div className={`accordion-item ${isOpen ? 'accordion__expanded' : ''}`}>
      <div className="accordion-item__header" onClick={() => onOpen(item.id)}>
        <div>{item.title}</div>
      </div>
      <div className="accordion-item__content">
        {item.content}
      </div>
    </div>
  )
}