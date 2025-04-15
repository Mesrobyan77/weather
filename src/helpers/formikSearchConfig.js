import { object, string } from "yup";
import { useState } from "react";
import { fetchWeather, forecast, today } from "../store/weatherSlice/api";
import { toast } from "react-toastify";
import { addToHistory, getUnit } from "../store/weatherSlice/weatherSlice";
import { useSelector } from "react-redux";
export const useSearchFormConfig = (dispatch) => {
  const [cooldown, setCooldown] = useState(false);
  const unit = useSelector(getUnit)
  const validationSchema = object({
    city: string().required("City is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (cooldown) return;
    try {
      const result = await dispatch(fetchWeather({city:values.city,unit})).unwrap();
      const { lat, lon } = result.coord;

      await dispatch(today({ lat, lon ,unit})).unwrap();
      await dispatch(forecast({city:values.city,unit})).unwrap();

      dispatch(addToHistory(result));
      toast.success(`Weather updated for ${values.city}`);
    } catch (error) {
      toast.error(error);
    }
    setCooldown(true);
    setTimeout(() => setCooldown(false), 5000);
    resetForm();
  };

  return { validationSchema, handleSubmit, cooldown };
};
