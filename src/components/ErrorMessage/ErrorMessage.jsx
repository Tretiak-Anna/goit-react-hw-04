import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <p className={css.error}>
      Something went wrong. Try to donate to Ukrainian soldiers and refresh the
      page
    </p>
  );
};
export default ErrorMessage;
