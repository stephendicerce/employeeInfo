/**
 * A function to build a JSON representation of the form.
 *
 * This example uses the serializeArray function. This was done
 * in an effort to demonstrate a fundamental understanding of 
 * Json without spending extra time typing out all of the inputs
 * into a customized string.
 * 
 * @param {HTMLElement} form  the form element from which to create 
 *                            a JSON representation of.
 * 
 * @return {String}  The json representation of the HTML form with all
 *                   values set to their string representations.
 */
function packageJson(form) {
    const array= $(form).serializeArray();
    const json = {};
    $.each(array, function() {
	json[this.name] = this.value || "";
    });
    return json;
}
