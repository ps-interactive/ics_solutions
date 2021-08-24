function setPageThread(name, { popular, expires, activeClass } ){

    let nameElement = _buildNameElement(name);
    let settings = _parseSettings(popular, expires, activeClass);

    _updateThreadElement(nameElement, settings);
}
