<tr>
              <td className="py-2 px-4">
                <label
                  htmlFor="country"
                  className="text-[#1A2857] text-base font-medium font-montserrat"
                >
                    Permission:
                </label>
              </td>
              <td className="py-4 px-4">
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    onBlur={handleCountryBlur}
                    onFocus={handleCountryFocus}
                    className={`block bg-[#E9ECEF] rounded-[10px] leading-10 px-4 w-[18rem] h-[3rem] border ${
                      countryError ? "border-red-500" : ""
                    } appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                    name="databaseType"
                  >
                    <option value="" hidden>
                      Select Permission
                    </option>
                    {orgCountryResult &&
                      orgCountryResult.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    {/* <option value='Kenya'>Kenya</option>
                    <option value='Uganda'>Uganda</option>
                    <option value='South Africa'>South Africa</option>
                    <option value='Ethiopia'>Ethiopia</option> */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <span className="text-xl">
                      {React.cloneElement(
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http:www.w3.org/2000/svg"
                        >
                          <path d="M24 2.57143V21.4286C24 22.8482 22.8482 24 21.4286 24H2.57143C1.15179 24 0 22.8482 0 21.4286V2.57143C0 1.15179 1.15179 0 2.57143 0H21.4286C22.8482 0 24 1.15179 24 2.57143ZM4.95536 10.0982L11.5446 16.6875C11.7964 16.9393 12.2036 16.9393 12.4554 16.6875L19.0446 10.0982C19.4518 9.69107 19.1625 9 18.5893 9H5.41071C4.8375 9 4.54821 9.69107 4.95536 10.0982Z" />
                        </svg>,
                        { fill: "currentColor" }
                      )}
                    </span>
                  </div>
                </div>
                {countryError && (
                  <span
                    id="error__message_size"
                    className="text-red-500 text-xs"
                  >
                    {countryError}
                  </span>
                )}
              </td>
            </tr>