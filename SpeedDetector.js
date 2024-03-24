function speedDetect (speed) {
    let points;
    if (speed < 75) {
        points = 0
    } else {
        if (speed < 80) {
            points = 1
        } else {
            if (speed < 85) {
                points = 2
            } else {
                if (speed < 90) {
                    points = 3
                } else {
                    if (speed < 95) {
                        points = 4
                    } else {
                        if ( speed < 100) {
                            points = 5
                        } else {
                            if ( speed < 105) {
                                points = 6
                            } else {
                                if (speed < 110) {
                                    points = 7
                                } else {
                                    if (speed < 115) {
                                        points = 8
                                    } else {
                                        if (speed < 120) {
                                            points = 9
                                        } else {
                                            if (speed < 125) {
                                                points = 10
                                            } else {
                                                if (speed < 130 ) {
                                                    points = 11
                                                } else {
                                                    if (speed < 135) {
                                                        points = 12
                                                    } else {
                                                        points = 'Lisense suspended'
                                                    }
                                                }
                                            }
                                        }
                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
return points;
}

console.log(speedDetect());