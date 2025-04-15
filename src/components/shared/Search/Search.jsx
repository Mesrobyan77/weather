import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useSearchFormConfig } from "../../../helpers/formikSearchConfig";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { fetchWeather, forecast, today } from "../../../store/weatherSlice/api";
import { getUnit } from "../../../store/weatherSlice/weatherSlice";

function Search() {
  const dispatch = useDispatch();
  const { validationSchema, handleSubmit, cooldown } =
    useSearchFormConfig(dispatch);
  const unit = useSelector(getUnit);
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const result = await dispatch(
          fetchWeather({ city: "Yerevan", unit })
        ).unwrap();
        const { lat, lon } = result.coord;
        await dispatch(today({ lat, lon, unit }));
        await dispatch(forecast({ city: "Yerevan", unit }));
      } catch (error) {
        toast.error(error);
      }
    };

    fetchInitialData();
  }, [dispatch]);

  return (
    <div className={styles.searchContainer}>
      <Formik
        initialValues={{ city: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.inputBox}>
              <Field
                type="text"
                name="city"
                placeholder="Enter your City"
                className={styles.input}
                disabled={cooldown}
              />
              <ErrorMessage
                name="city"
                component="p"
                className={styles.error}
              />
            </div>
            <button
              type="submit"
              style={{ display: "none" }}
              disabled={cooldown || isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Search;
