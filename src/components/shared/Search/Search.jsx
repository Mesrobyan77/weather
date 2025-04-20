import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosition, useSearchFormConfig } from "../../../helpers/formikSearchConfig";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { fetchWeather, forecast, today } from "../../../store/weatherSlice/api";
import { getLocation, getUnit } from "../../../store/weatherSlice/weatherSlice";

function Search() {
  const dispatch = useDispatch();
  const { validationSchema, handleSubmit, cooldown } =
    useSearchFormConfig(dispatch);
  const unit = useSelector(getUnit);
  const position = useSelector(getLocation)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        let x = await getUserPosition()
        const result = await dispatch(
          position
            ? fetchWeather({ location: x, unit })
            : fetchWeather({ city: "Tokyo", unit })
        ).unwrap();
        console.log(result,'ress');
        const { lat, lon } = result.coord;
        await dispatch(today({ lat, lon, unit }));
        await dispatch(forecast({ city: result.name, unit }));

      } catch (error) {
        toast.error(error);
      }
    };

    fetchInitialData();
  }, [dispatch,unit,position]);

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
