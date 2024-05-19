import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../../context/context';


const Add = () => {

  const { product, setProduct } = useContext(MainContext)

  const formik = useFormik({
    initialValues: {
      title: "",
      image: '',
      name: '',
      price: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      axios
        .post("http://localhost:8080/api/exam", {
          title: values.title,
          price: values.price,
          image: values.image,
          count: 1,
          totalPrice: values.price,
        })
          .then((resp) => {
            console.log(resp);
            console.log(resp.data);
            setProduct([...product, resp.data])
          })
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title"> Name</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <label htmlFor="image">Image</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
      />
      {formik.errors.image ? <div>{formik.errors.image}</div> : null}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price ? <div>{formik.errors.price}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Add