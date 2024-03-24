function speedDetect (speed) {
    // speedDetect is the function Name. The only parameter required is the speed.
    let points;
    // These are the demerit points. the variable has been declared by the use of the keyword let.
    if (speed < 75) {
        points = 0
    // I have used < because only when the speed reaches 75 will a demerit point be earned
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
                                                        // as the speed increases with intervals of 5, the demerits increase with intervals of 1.
                                                    } else {
                                                        points = 'Lisense suspended'
                                                        // Any speed from 135 and above gets the driver's lisense suspended.
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
// Returns total demerit points earned
}

console.log(speedDetect());
// Where the speed is input