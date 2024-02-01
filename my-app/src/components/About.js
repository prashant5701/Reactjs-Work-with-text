import React from 'react'

export default function About() {
    return (
        <div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Functionalities
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            
                        <br/> <br/><strong>Convert to Uppercase:</strong>
                            
                            This feature transforms all letters in a given text to uppercase. For example, it would turn "hello" into "HELLO."
                            <br/> <br/> <strong>Convert to Lowercase:</strong>

                            This feature converts all letters in a given text to lowercase. For instance, it would change "WORLD" to "world."
                            <br/><br/><strong>Clear Text:</strong>

                            The "Clear Text" feature likely removes any formatting or special characters from the text, leaving only alphanumeric characters. It's a way to clean up the input and get rid of unwanted elements.
                            <br/><br/><strong>Remove Extra Spaces:</strong>

                            This feature eliminates additional spaces between words, ensuring that there is only one space between each word. For instance, it would turn " Hello World " into "Hello World."

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
