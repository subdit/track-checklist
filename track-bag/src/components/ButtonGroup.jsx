import Button from './Button';

export default function ButtonGroup() {
  return (
    <section className='button-group'>
      <Button type='secondary'>Mark all as completed</Button>
      <Button type='secondary'>Mark all as incompled</Button>
      <Button type='secondary'>Reset to initial</Button>
      <Button type='secondary'>Remove List</Button>
    </section>
  );
}
