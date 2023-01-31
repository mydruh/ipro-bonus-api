import logo from '../logo.svg';
import '../App.css';

function BonusBlock(props) {

  const isoDate = props.deadline;
  const date = new Date(isoDate);
  let month = date.getDay().toString()
  let day = date.getDate().toString()

  if(month.length < 2){
    month = "0" + month
  }else{
    month = month
  }

  const normalDate = date.toLocaleString();

  return (
  <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3 bonusBlock" aria-current="true">
    <i class="bi bi-fire bonusIcon"></i>
    <div class="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 class="mb-0 bonusTitle">{props.title}</h6>
        <p class="mb-0 opacity-75" style={{margin: "10px 0"}}>{props.description}</p>
      </div>
      <small class="opacity-50 text-nowrap bonusDeadline">{"до " + day + "." + month}</small>
    </div>
  </a>
  );
}

export default BonusBlock;
