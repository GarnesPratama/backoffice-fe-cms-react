"use client"

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useCreateTable } from '@/api/table';


type FieldType = {
    title?: string;
    content?: string;
    userId?: number;
};


const FormComponent: React.FC = () => {
    const { mutate } = useCreateTable()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        mutate(values, {
            onSuccess: () => {
                alert("sukses")
            }, onError: () => {
                alert("error")
            }
        })
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Input Fields
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    <Form
                        name="basic"
                        layout='vertical'
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="title"
                            name="title"
                            className='gap-10'
                            rules={[{ required: true, message: 'Please input your username!' }]}

                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="content"
                            name="content"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="userId"
                            name="userId"
                            initialValue={7}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </>

    )



};

export default FormComponent;