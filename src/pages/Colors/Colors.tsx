import { Button, Form, FormProps, Input, message } from 'antd';
import { useColor } from '../../api/features/hooks/useColor';
import { useState } from 'react';

type FieldType = {
  name: string;
};

const Colors = () => {
  const { createColor, getColor, deleteColor } = useColor();
  const { data: colors } = getColor;
  const [initialValue, setInitialValue] = useState({});

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    createColor.mutate(values);
  };

  const handleDelete = (id: string) => {
    deleteColor.mutate(id, {
      onSuccess: () => {
        message.success('Deleted color');
      },
    });
    setInitialValue({ name: '' });
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={initialValue}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input  name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>
        <div className="flex gap-2 flex-wrap">
          {colors?.data.map((item: any) => (
            <div
              className="border flex flex-col gap-2 justify-center items-center border-gray-200"
              key={item.id}
            >
              <h3 className="text-lg">{item.name}</h3>
              <button
                className="bg-red-500 px-2 text-white cursor-pointer"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
