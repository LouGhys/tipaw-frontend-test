import classNames from 'classnames/bind';
import { ChangeEventHandler, useCallback, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useHistory } from 'react-router';
import DoneIcon from './assets/done-icon.svg';
import DropIcon from './assets/drop-icon.svg';
import styleIdentifiers from './proNew.scss';

const styles = classNames.bind(styleIdentifiers);

type FormValues = { name: string; description: string };

export const ProNew = () => {
  const history = useHistory();
  const [images, setImages] = useState<string[]>([]); // Not blobs, but object urls (this is better for putting files in state)
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const fileInputChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const files = event?.target?.files;
      if (files == null) return;
      const urls = [...images];
      for (const file of Array.from(files)) {
        urls.push(URL.createObjectURL(file));
      }
      setImages(urls);
    },
    [images]
  );

  const clearImageClickHandler = useCallback(
    (index: number) => {
      setImages(images.filter((_, i) => i !== index));
    },
    [images]
  );

  const formSubmitHandler = useCallback(
    (values) => {
      console.log('Send to apollo: ', values, images);
      // Ugly but working timeout sequence below:
      if (!loading) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setDone(true);
          setTimeout(() => {
            history.push('/');
          }, 2500);
        }, 2000);
      }
    },
    [history, images, loading]
  );

  if (done)
    return (
      <div className={styles('ProNew')}>
        <div className={styles('done-wrapper')}>
          <h2>Done!</h2>
          <p>Redirecting...</p>
          <img className={styles('done-icon')} src={DoneIcon} alt='' />
        </div>
      </div>
    );

  return (
    <div className={styles('ProNew')}>
      <div className={styles('form-wrapper')}>
        <h1>New Pro</h1>
        <Form<FormValues>
          onSubmit={formSubmitHandler}
          validate={(values) => {
            const errors: Partial<FormValues> = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.description) {
              errors.description = 'Required';
            }
            return errors;
          }}>
          {({ handleSubmit, hasValidationErrors }) => (
            <form onSubmit={handleSubmit}>
              <Field name='name'>
                {({ input, meta }) => (
                  <div className={styles('input-wrapper')}>
                    <p className={styles('input-label')}>Name *</p>
                    <input className={styles('input-text')} placeholder='Name' {...input} />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <div className={styles('input-error')}>{meta.error || meta.submitError}</div>
                    )}
                  </div>
                )}
              </Field>

              <Field name='description'>
                {({ input, meta }) => (
                  <div className={styles('input-wrapper')}>
                    <p className={styles('input-label')}>Description *</p>
                    <textarea className={styles('input-text input-text-area')} placeholder='Description' {...input} />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <div className={styles('input-error')}>{meta.error || meta.submitError}</div>
                    )}
                  </div>
                )}
              </Field>

              <div className={styles('input-wrapper')}>
                <p className={styles('input-label')}>Pictures</p>
                <Field name='file'>
                  {({ input }) => (
                    <div>
                      <input
                        className={styles('file-input')}
                        accept='image/*'
                        id='file'
                        type='file'
                        multiple
                        {...input}
                        onChange={fileInputChangeHandler}
                      />
                      <label htmlFor='file'>
                        <div className={styles('dropbox')}>
                          <div className={styles('dropbox-content')}>
                            <img src={DropIcon} alt='' />
                          </div>
                        </div>
                      </label>
                    </div>
                  )}
                </Field>
              </div>

              <div className={styles('input-wrapper')}>
                <div className={styles('preview-image-container')}>
                  {images.map((image, index) => (
                    <div key={index} className={styles('preview-image-wrapper')}>
                      <img className={styles('preview-image')} src={image} alt='' />
                      <div className={styles('remove-button')} onClick={() => clearImageClickHandler(index)}>
                        x
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type='submit'
                className={styles('submit-button')}
                aria-busy={loading}
                disabled={loading || hasValidationErrors}>
                {loading ? 'Loading...' : 'Create'}
              </button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};
