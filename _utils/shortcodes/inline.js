const paired = {
    note: (content) => `
        <span class="note-container" role="button" tabindex="0" aria-expanded="false" 
            aria-label="Toggle note"><span class="note">${content}</span></span>
    `
};

export default { paired };