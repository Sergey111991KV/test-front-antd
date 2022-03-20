import './App.css';
import { Form, Button, InputNumber, DatePicker } from 'antd';

function App() {
  async function onFinish (values) {
    console.log('submit form')
    const url = `https://tenders.hostman.site/api/tender-requests/}`
    await fetch(url, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      values
    })
      .then((response) => response.json())
      .then((res) => alert(res.data))
      .catch((e) => {
        console.log(e)
        alert(e)
      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="App">
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Card Number"
        name="cardNumber"
        rules={[
          {
            required: true,
            message: 'Please input Card Number!',
          },
          { type: 'number', max: 9999999999999999 }
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Expiration Date"
        name="expirationDate"
        rules={[
          {
            required: true,
            message: 'Please input Expiration Date!',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="CVV"
        name="cvv"
        rules={[
          {
            required: true,
            message: 'Please input CVV!',
          },
          { type: 'number', max: 999 }
        ]}
      >
        <InputNumber/>
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            message: 'Please input Amount!',
          },
          { type: 'number'}
        ]}
      >
        <InputNumber min={1}/>
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}

export default App;
