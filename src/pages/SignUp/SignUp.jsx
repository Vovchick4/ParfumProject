import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./SignUp.module.css";

import { Input, FormRow, Button, Loader } from "../../components";
import { authActions } from "../../redux/auth";

export default function SinUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [fileIcon, setFileIcon] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = () => {
    setLoading(true);
    const formik = {
      name,
      email,
      phone,
      password,
      date,
      fileIcon,
    };
    dispatch(authActions.addUser(formik));
  };

  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={onSubmit}>
        {loading && <Loader />}
        {!loading && (
          <>
            <h1 className={styles.title}>Admin</h1>
            <FormRow>
              <Input
                id="name"
                type="name"
                placeholder="Name"
                autoComplete="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              >
                Name
              </Input>
            </FormRow>

            <FormRow>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              >
                Email
              </Input>
              <Input
                id="tel"
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              >
                Phone
              </Input>
            </FormRow>

            <FormRow>
              <Input
                id="password"
                type="password"
                placeholder="Choose password"
                autoComplete="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              >
                Password
              </Input>
            </FormRow>

            <FormRow>
              <Input
                id="date"
                type="date"
                placeholder="Choose Date"
                autoComplete="date"
                // value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              >
                Date birthday
              </Input>

              <Input
                id="fileIcon"
                type="file"
                autoComplete="file"
                value={fileIcon}
                onChange={(e) => setFileIcon(e.target.value)}
                required
              >
                Select Icon
              </Input>
            </FormRow>

            <Button type="submit">Sign in</Button>
          </>
        )}
      </form>
    </div>
  );
}
