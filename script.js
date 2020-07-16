let btnAdd = document.querySelector('#up');
let btnSub = document.querySelector('#down');
let input = document.querySelector('#sun-hour-display');

btnAdd.addEventListener('click', () => {
	input.value = parseInt(input.value) + 1;
});

btnSub.addEventListener('click', () => {
	input.value = parseInt(input.value) - 1;
});

let btnAddAlt = document.querySelector('#upAlt');
let btnSubAlt = document.querySelector('#downAlt');
let inputAlt = document.querySelector('#sun-hour-display-alt');

btnAddAlt.addEventListener('click', () => {
	inputAlt.value = parseInt(inputAlt.value) + 1;
});

btnSubAlt.addEventListener('click', () => {
	inputAlt.value = parseInt(inputAlt.value) - 1;
});

var classIncrement = 1;

function addItem (element) {
	console.log("function reached");
	var newdiv = document.createElement('div');
	newdiv.setAttribute(`id`, `parentDiv-${classIncrement}`);
	console.log("div created");
    newdiv.innerHTML = `<div id="field-${classIncrement}" class="field-line d-flex flex-wrap justify-content-between">
	<select class="select-field" name="appliance">
		<span class="opt-holder"><option disabled selected hidden>SELECT AN APPLIENCE</option></span>
		<option value="0">Blender</option>
		<option value="1">Can Opener</option>
		<option value="2">Coffee Machine</option>
	</select>
	<input type="hidden" name="appliance[]"> 
	<input type="number" class="input-quantiy" name="quantity[]"> 
	<input type="number" class="input-wats" name="watts[]"> 
	<input type="number" step="any" class="input-quantiy" name="hours-per-day[]"> 
	<input type="text" class="input-quantiy" name="watts-hours-per-day[]">
	<div class="delete"><button onClick="removeElement('parentDiv-${classIncrement}', 'field-${classIncrement}');"><i class="fa fa-times" aria-hidden="true"></i></button></div>
</div>`;
    document.getElementById(element).appendChild(newdiv);
    classIncrement = classIncrement + 1;
}

function removeElement(parentDiv, childDiv){
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
}

var count = 0;

function addSection (element) {
	if(count === 0){
	var newdivAlt = document.createElement('div');
    newdivAlt.innerHTML = `<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="form-submit" style="display: block;">
								<div class="sub-text"> Here are the results of your form submission. If you would like us to email you a copy, enter your email address below.</div>
							</div>
						</div>
						<div class="col-12">
							<div class="email-form">
								<div class="table-container" id="formResults">
									<table width="100%" style="margin-bottom: 20px;" class="load-eval-results">
										<thead>
											<tr>
												<th align="left">Appliance</th>
												<th align="left">Quantity</th>
												<th align="left">Watts</th>
												<th align="left">Hours On per Day</th>
												<th align="left">Watt Hours per Day</th>
											</tr>
										</thead>
										<tbody>
											<tr></tr>
										</tbody>
									</table>
									<table width="100%" style="margin-bottom: 20px;" class="load-eval-results2">
										<thead>
											<tr>
												<th align="left">System Calculation Results</th>
											</tr>
										</thead>
										<tbody>
											<tr></tr>
											<tr>
												<td>Killowatt Hours per Month: </td>
												<td> kWh</td>
											</tr>
											<tr>
												<td>Peak Sun Hours: </td>
												<td>5 hours/day</td>
											</tr>
											<tr>
												<td>Solar Panel Watts: </td>
												<td>300 W</td>
											</tr>
											<tr>
												<td>Number of Panels: </td>
												<td></td>
											</tr>
											<tr>
												<td>System Size: </td>
												<td>NaN kW</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="submit-section email-form" style="display: block;">
								<div class="email-head">Email <span>*</span></div>
							</div>
							<form class="hs-email-result">
								<input type="email" name="email" id="email">
								<div class="check_box">
									<input type="checkbox" id="checkbox" required>
									<label for="checkbox">I agree to the <a href="#">Terms and Conditions.</a><span>*</span></label>
								</div>
								<input type="submit" value="Get My Results" class="btn btn-lg btn-primary">
							</form>
						</div>
					</div>
				</div>`;
    document.getElementById(element).appendChild(newdivAlt);
	count = count + 1;
	}
}