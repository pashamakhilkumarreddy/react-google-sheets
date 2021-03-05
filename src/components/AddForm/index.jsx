import { useState } from 'react';
import env from 'react-dotenv';
import { Button, Form } from 'semantic-ui-react';
import { addRow } from '../../services/Sheet';
import './form.css';

const initialData = {
  Name: '',
  Age: '',
  Salary: '',
  Hobby: '',
};

const AddForm = () => {
  const [formData, setFormData] = useState(initialData);
  const handleOnChange = (e) => {
    try {
      const key = (e.target.name.slice(0,1).toUpperCase() + e.target.name.slice(1).toLowerCase());
      setFormData({
        ...formData,
        [key]: e.target.value,
      });
    } catch(err) {
      console.error(err);
    }
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      if (Object.values(formData).every((val) => val.trim())) {
        const sheetId = process.env.REACT_APP_SHEET_ID;
        const result = await addRow({ sheetId, data: formData});
        if (result.status === 200) {
          setFormData(initialData);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const clearForm = () => {
    setFormData(initialData);
  };
  return (
    <Form className='form'>
      <Form.Field>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          placeholder='Please enter your name'
          onChange={handleOnChange}
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Age</label>
        <input
          type='text'
          name='age'
          value={formData.age}
          placeholder='Please enter your age'
          onChange={handleOnChange}
          required
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor=''>Salary</label>
        <input
          type='text'
          name='salary'
          value={formData.salary}
          placeholder='Please enter your salary'
          onChange={handleOnChange}
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Hobby</label>
        <input
          type='text'
          name='hobby'
          value={formData.hobby}
          placeholder='Please enter your hobby'
          onChange={handleOnChange}
          required
        />
      </Form.Field>
      <Button type='button' positive onClick={handleOnSubmit}>
        Submit
      </Button>
      <Button type='button' negative onClick={clearForm} className='mx-2'>
        Clear
      </Button>
    </Form>
  );
};

export default AddForm;
