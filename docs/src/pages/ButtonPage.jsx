import React from 'react';

import Button from '@genereact/button';
import '@genereact/button/styles.css';

import Page, { getPageTableCell } from '../layout/Page';

const ButtonPage = props => (
  <Page
    {...props}
    title="<Button />"
  >
    <table className="Page__table">
      <tbody>
        {getPageTableCell(
          'Simple Button',
          <Button
            className="MyCustomButtonClass"
            text="Click me"
            iconName="smile-o"
            onClick={() => alert('I have been clicked :)')}
          />,
        )}

        {getPageTableCell(
          'Simple Button (passing params)',
          <Button
            className="MyCustomButtonClass"
            text="Pass params"
            iconName="arrow-right"
            params={{
              id: 1,
              text: 'myText',
            }}
            onClick={params => (
              alert(
                'Passing id param: '+ params.id + ' and text: ' + params.text)
            )}
          />
        )}

        {getPageTableCell(
          'Cancel Button',
          <Button
            className="MyCustomButtonClass"
            text="Cancel"
            iconName="remove"
            onClick={() => alert('Do you really want to cancel this action ?')}
          />
        )}

        {getPageTableCell(
          'Submit Button',
          <Button
            className="MyCustomButtonClass"
            text="Submit"
            type="submit"
            iconName="send"
            onClick={() => alert('I am a submit button :)')}
          />
        )}

        {getPageTableCell(
          'State disabled',
          <Button
            className="MyCustomButtonClass"
            text="I'm disabled"
            iconName="minus-circle"
            disabled
          />
        )}

        {getPageTableCell(
          'Loading State',
          <Button
            className="MyCustomButtonClass"
            text="Click me"
            loading="Loading ..."
          />
        )}
      </tbody>
    </table>
  </Page>
);

export default ButtonPage;
