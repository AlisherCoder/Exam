import type { FormProps } from 'antd';
import { Button, Form, Input, InputNumber, message, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useColor } from '../../api/features/hooks/useColor';
import { useProduct } from '../../api/features/hooks/useProduct';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type FieldType = {
  title: string;
  price: number;
  image_url: string;
  color_id: number;
  desc: string;
};

interface Item {
  name: string;
  id: string;
}

const Create = () => {
  const { getColor } = useColor();
  const { createProduct, updateProduct } = useProduct();
  const { data } = getColor;

  const updated = useSelector((state: RootState) => state.product.value);

  console.log(updated);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (updated) {
      updateProduct.mutate(
        { body: values, id: updated.id },
        {
          onSuccess: () => {
            message.success('Updated product');
          },
        },
      );
    } else {
      createProduct.mutate(values, {
        onSuccess: () => {
          message.success('Created product');
        },
      });
    }
  };

  const colorsData = data?.data?.map((item: Item) => ({
    value: item.id,
    label: item.name,
  }));

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={updated ? updated : {}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item<FieldType>
          label="Image url"
          name="image_url"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Color"
          name="color_id"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select placeholder="Select colors" options={colorsData} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Desc"
          name="desc"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Create;
