import { message } from 'antd';
import { useProduct } from '../../api/features/hooks/useProduct';
import { useDispatch } from 'react-redux';
import { toggleSaved } from '../../redux/features/product.slice';
import { Product } from '../../redux/features/product.slice';
import { useNavigate } from 'react-router-dom';

const Phones = () => {
  const { getProduct, deleteProduct } = useProduct();
  const { data } = getProduct;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    deleteProduct.mutate(id, {
      onSuccess: () => {
        message.success('Deleted product');
      },
    });
  };

  const handleUpdate = (item: Product) => {
    dispatch(toggleSaved(item));
    navigate('/');
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {data?.data.map((item: any) => (
          <div
            className="flex flex-col gap-2 justify-center items-center"
            key={item.id}
          >
            <div className="w-[200px]">
              <img className="w-full" src={item.image_url} alt="" />
            </div>
            <div>
              <p>{item.title}</p>
            </div>
            <div className="flex justify-between items-center gap-4 w-full px-10">
              <strong>$ {item.price}</strong>
              <div className="flex gap-2 justify-center items-center">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-2 py-2 text-white bg-blue-500"
                >
                  Del
                </button>
                <button
                  onClick={() => handleUpdate(item)}
                  className="bg-pink-500 px-2 py-2 text-white"
                >
                  Upd
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phones;
