import Button from './Button';
import { secondaryButtons } from './lib/constants';

export default function ButtonGroup() {
  // List of buttons then map it out

  return (
    <section className='button-group'>
      {secondaryButtons.map(buttonText => {
        return (
          <Button key={buttonText} type='secondary'>
            {buttonText}
          </Button>
        );
      })}
    </section>
  );
}
