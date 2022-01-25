'use strict'

//Функция создания машины со значениями по умолчанию
function createCar(color = 'red', consumption = 10, tankVolume = 60,) {
// Получение всех необходимых значений
    let _tankVolume = tankVolume;
    let _consumption = consumption;
    let _startInterval;
    let consumptionGas;
    let coveredDistance;

    // Функция валидации входящих значений для проверки количества бензина
    function _checkGasInput(isFull, gasVolume) {
        if (typeof isFull !== 'boolean') {
            console.warn('isFull addGas function parameter must be a Boolean');
            return false;
        }

        if (!isFull && !_isNumber(gasVolume)) {
            console.warn('gasVolume addGas function parameter must be a Number');
            return false;
        }

        return true;
    }

// Функция валидации входящих значений для функции езды
    function _checkRideInput(speed, distance) {
        if (!_isNumber(speed)) {
            console.warn('speed ride function parameter must be a Number');
            return false;
        }
        if (!_isNumber(distance)) {
            console.warn('distance ride function parameter must be a Number');
            return false;
        }
        if (speed <= 0 || speed > 230) {
            console.warn('Speed mast be more then 0 but less then 230');
            return false;
        }
        if (distance <= 0) {
            console.warn('Distance mast be more then 0 ');
            return false;
        }

        return true;
    }

// Функция проверки на число
    function _isNumber(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

// Функция проверки на наличие бензина
    function _checkAvailabilityGas() {
        if (car.gasVolume === 0) {
            console.warn('Fuel not found');
            return;
        }
    }

//Функция валидации количества заливаемого бензина
    function _checkGasVolume(gasVolume) {
        return (car.gasVolume + gasVolume) < _tankVolume && gasVolume >= 0;
    }

    function _checkGasExisting() {
        return car.gasVolume !== 0;
    }
    function _fuelConsumption(speed) {
        if (speed < 50) {
            consumption = 0.8 * consumption;
        }
        if (speed >= 120) {
            consumption = 1.2 * consumption;
        }
        consumptionGas = consumption / 100;
        return consumptionGas;
    }

// Конструктор машин
    let car = {
        color: color, gasVolume: 0, ignition: false,

        // Функция проверки количества бензина в баке
        checkGas() {
            return car.gasVolume.toFixed(2);
        },

        //Функция добавления бензина
        addGas(isFull = false, gasVolume = 0) {
            if (!_checkGasInput(isFull, gasVolume)) {
                return;
            }
            if (isFull) {
                car.gasVolume = _tankVolume;
            } else {
                if (_checkGasVolume(gasVolume)) {
                    car.gasVolume += gasVolume;
                } else {
                    console.warn(`gas volume is to large. You can add ${_tankVolume - car.gasVolume} liters`);
                }
            }
        },

        //Функция старта машины
        start() {
            clearInterval(_startInterval);
            if (car.gasVolume === 0) {
                _checkAvailabilityGas();
            }
            car.ignition = true;
            _startInterval = setInterval(function () {
                if (_checkGasExisting(car.gasVolume)) {
                    car.gasVolume -= 0.1;
                } else {
                    car.stop();
                    console.warn('Fuel  is end');
                }
            }, 1000)
        },

        //Функция остановки машины
        stop() {
            car.ignition = false;
            clearInterval(_startInterval);
        },

        //Функция езды с указанием расстояния и скорости
        ride(speed, distance) {
            car.ignition= true;
            if (!_checkRideInput(speed, distance)) {
                return;
            }
            _fuelConsumption(speed);
            if (car.gasVolume >= distance * consumptionGas) {
                car.gasVolume = car.gasVolume - distance * consumptionGas;
                console.log(`The car covered ${distance} kilometers in ${(distance / speed * 60).toFixed(2)} minutes at a speed of ${speed} km/h, the rest of the gas is ${car.gasVolume.toFixed(2)} liters`);
            } else if (car.gasVolume < distance * consumptionGas && car.gasVolume !== 0) {
                coveredDistance = consumptionGas * car.gasVolume * 100;
                car.gasVolume = 0;
                console.log(`The car covered ${coveredDistance.toFixed(2)} kilometers in ${(coveredDistance / speed * 60).toFixed(2)} minutes at a speed of ${speed} km/h, the rest of the gas is ${car.gasVolume} liters`);
            } else {
                _checkAvailabilityGas();
            }
            car.ignition = false;
        }
    }
    return car;
}
