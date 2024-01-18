enum StateUser {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}
type SelectedOptions = {
  type: string;
  color: string;
  power: string;
};
interface ProductData {
  id: string;
  name: string;
  category: string;
  image: string;
  type: string;
  color: string;
  shape: string;
  button: string;
  power: string;
  price: number;
}
