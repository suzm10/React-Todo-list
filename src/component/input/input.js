import Input from '@material-ui/core/Input';

function Input() {
  return (
    <div className="Input">
      <Input defaultValue="Add" inputProps={{ 'aria-label': 'description' }} />
    </div>
  );
}

export default Input;