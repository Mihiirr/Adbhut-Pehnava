import { ActionFunction, json, MetaFunction } from "@remix-run/node";
import { Link, useActionData, useSearchParams } from "@remix-run/react";
import Button from "~/components/Button";
import Layout from "~/components/Layout";
import { db } from "~/services/client.server";
import { createUserSession, register } from "~/services/session.server";

export const meta: MetaFunction = () => {
  return {
    title: `Register - Adbhut Pehnava`,
  };
};

type Props = {};

function validateUsername(username: unknown) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

function validateUrl(url: any) {
  let urls = ["/", "https://remix.run"];
  if (urls.includes(url)) {
    return url;
  }
  return "/";
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    username: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = validateUrl(form.get("redirectTo") || "/");
  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fields = { username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  const userExists = await db.user.findFirst({
    where: { username },
  });
  if (userExists) {
    return badRequest({
      fields,
      formError: `User with Username: ${username} already exists`,
    });
  }
  const user = await register(username, password);
  return createUserSession(user.id, redirectTo);
};

const Register = (props: Props) => {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();
  return (
    <Layout brownTitle="Free shipping for orders over ₹2000">
      <div className="h-full w-full p-5 md:p-10 flex items-center justify-center">
        <div className="lg:w-4/12 md:w-8/12 w-full p-5 flex flex-col items-center justify-center">
          <p className="text-3xl text-stone-600">CREATE ACCOUNT</p>
          <form className=" w-full mt-8" method="post">
            <input
              type="hidden"
              name="redirectTo"
              value={searchParams.get("redirectTo") ?? undefined}
            />
            <div className="flex flex-col justify-between">
              <label className="text-sm text-stone-500">USERNAME</label>
              <input
                id="username-input"
                name="username"
                type="text"
                defaultValue={actionData?.fields?.username}
                aria-invalid={Boolean(actionData?.fieldErrors?.username)}
                aria-errormessage={
                  actionData?.fieldErrors?.username
                    ? "username-error"
                    : undefined
                }
                className="h-8 border-2 border-stone-400 rounded px-2"
                autoFocus
              />
              {actionData?.fieldErrors?.username ? (
                <p className="text-red-500" id="username-error" role="alert">
                  {actionData.fieldErrors.username}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col justify-between mt-5">
              <label className="text-sm text-stone-500">PASSWORD</label>
              <input
                id="password-input"
                name="password"
                type="password"
                defaultValue={actionData?.fields?.password}
                aria-invalid={
                  Boolean(actionData?.fieldErrors?.password) || undefined
                }
                aria-errormessage={
                  actionData?.fieldErrors?.password
                    ? "password-error"
                    : undefined
                }
                className="h-8 border-2 border-stone-400 rounded px-2"
              />
              {actionData?.fieldErrors?.password ? (
                <p className="text-red-500" role="alert" id="password-error">
                  {actionData.fieldErrors.password}
                </p>
              ) : null}
            </div>
            <div className="mt-5">
              <Button variant="secondary" type="submit">
                CREATE ACCOUNT
              </Button>
              {actionData?.formError ? (
                <p className="text-red-500">
                  {actionData.formError}, try different username!!!
                </p>
              ) : null}
              <p className="mt-2">
                Already have an account?{" "}
                <span className="underline">
                  <Link to="/account/login">Login here</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
